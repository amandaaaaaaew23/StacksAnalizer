"use client"

import dynamic from "next/dynamic"

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
  return <DynamicStacksAnalizer />
}
