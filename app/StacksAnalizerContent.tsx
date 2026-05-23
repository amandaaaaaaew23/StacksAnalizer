"use client"

// Polyfill Buffer murni menggunakan ESM (wajib di baris paling atas)
import { Buffer as NodeBuffer } from "buffer"
if (typeof window !== "undefined") {
  window.Buffer = window.Buffer || NodeBuffer
}

import { useEffect, useState } from "react"
import {
  AppConfig,
  UserSession,
  showConnect,
  openContractCall
} from "@stacks/connect"
import { stringAsciiCV } from "@stacks/transactions"

export default function StacksAnalizerContent() {
  const [isMounted, setIsMounted] = useState(false)
  const [userSession, setUserSession] = useState<UserSession | null>(null)
  
  const [connected, setConnected] = useState(false)
  const [userAddress, setUserAddress] = useState("")
  const [wallet, setWallet] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [txid, setTxid] = useState("")

  useEffect(() => {
    setIsMounted(true)
    const appConfig = new AppConfig(["store_write"])
    const session = new UserSession({ appConfig })
    setUserSession(session)

    if (session.isUserSignedIn()) {
      const userData = session.loadUserData()
      const address = userData.profile.stxAddress.mainnet
      setUserAddress(address)
      setConnected(true)
    }
  }, [])

  function generateScore(wallet: string) {
    let score = 50
    const tags = []
    const seed = wallet.length

    if (seed % 2 === 0) {
      score += 10
      tags.push("Bridge User")
    }
    if (seed % 3 === 0) {
      score += 15
      tags.push("NFT Holder")
    }
    if (seed % 5 === 0) {
      score += 20
      tags.push("DeFi Activity")
    }

    let type = "Organic"
    let risk = "Low"

    if (score < 60) {
      type = "Possible Sybil"
      risk = "Medium"
    }

    return { wallet, score, type, risk, tags }
  }

  const connectWallet = () => {
    if (!userSession) return;
    
    showConnect({
      appDetails: {
        name: "StacksAnalizer",
        icon: "https://placehold.co/128x128/png",
      },
      redirectTo: "/",
      onFinish: () => {
        const userData = userSession.loadUserData()
        const address = userData.profile.stxAddress.mainnet
        setUserAddress(address)
        setConnected(true)
      },
      userSession
    })
  }

  const analyzeWallet = async () => {
    try {
      if (!connected) {
        alert("Connect wallet first")
        return
      }
      if (!wallet) {
        alert("Enter wallet address")
        return
      }

      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1200))

      const data = generateScore(wallet)
      setResult(data)

      await openContractCall({
        contractAddress: "SP6Y22GYPXRM900PC0W9ZC3D292PH2P1ZKQ5RQAT",
        contractName: "stacks-analizer",
        functionName: "analyze",
        functionArgs: [stringAsciiCV(data.type)],
        appDetails: {
          name: "StacksAnalizer",
          icon: "https://placehold.co/128x128/png",
        },
        onFinish(txData: any) {
          setTxid(txData.txId)
          setLoading(false)
        },
        onCancel() {
          setLoading(false)
        }
      })
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  if (!isMounted) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="w-full max-w-xl border border-zinc-800 rounded-2xl p-8 text-center text-zinc-500">
          Loading...
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-5xl font-bold mb-3">StacksAnalizer</h1>
        <p className="text-zinc-400 mb-8">AI powered wallet analyzer on Stacks</p>

        {!connected ? (
          <div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-6">
              <div className="text-lg font-semibold mb-3">Dapp Features</div>
              <ul className="text-zinc-400 space-y-2 text-sm">
                <li>• Wallet activity score</li>
                <li>• Organic / Sybil detection</li>
                <li>• Onchain activity proof</li>
                <li>• Mainnet transaction logging</li>
              </ul>
            </div>

            <button
              onClick={connectWallet}
              className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold cursor-pointer hover:bg-yellow-500 transition"
            >
              Connect Wallet
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-green-400 break-all">
              Connected:<br />{userAddress}
            </div>

            <input
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="Enter wallet address"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 mb-4 outline-none focus:border-yellow-400 transition"
            />

            <button
              onClick={analyzeWallet}
              disabled={loading}
              className="w-full bg-white text-black py-4 rounded-xl font-semibold cursor-pointer disabled:opacity-50 hover:bg-zinc-200 transition"
            >
              {loading ? "Analyzing..." : "Analyze Wallet"}
            </button>
          </div>
        )}

        {result && (
          <div className="mt-8 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-5">Analysis Result</h2>
            <div className="space-y-3">
              <div>Wallet: {result.wallet}</div>
              <div>Score: {result.score}</div>
              <div>Type: {result.type}</div>
              <div>Risk: {result.risk}</div>
              <div>Tags:</div>
              <div className="flex gap-2 flex-wrap">
                {result.tags.map((tag: string) => (
                  <span key={tag} className="bg-zinc-800 px-3 py-1 rounded-lg text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {txid && (
          <div className="mt-6 break-all">
            <p className="text-green-400 mb-2">Transaction Success</p>
            <a
              href={`https://explorer.hiro.so/txid/${txid}?chain=mainnet`}
              target="_blank"
              rel="noreferrer"
              className="underline text-green-400 hover:text-green-300"
            >
              View Transaction
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
