"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Buffer } from "buffer"

// 1. Menyuntikkan Polyfill Web3 sebelum komponen lain dimuat
if (typeof window !== "undefined") {
  window.Buffer = window.Buffer || Buffer;
  window.process = window.process || { env: {} } as any;
}

// 2. Memuat komponen utama setelah polyfill tersedia
const DynamicStacksAnalizer = dynamic(
  () => import("./StacksAnalizerContent"),
  { 
    ssr: false,
    loading: () => (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="text-zinc-500 animate-pulse">Loading App...</div>
      </main>
    )
  }
)

export default function Home() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // 3. Memastikan render hanya berjalan di client-side
    setReady(true)
  }, [])

  if (!ready) return null

  return <DynamicStacksAnalizer />
}
