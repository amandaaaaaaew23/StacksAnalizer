"use client"

import dynamic from "next/dynamic"

// Memaksa Next.js untuk memuat komponen ini HANYA di browser (Client-side)
// Ini akan menghindari error prerender/Turbopack saat proses 'next build' di Vercel
const DynamicStacksAnalizer = dynamic(
  () => import("./StacksAnalizerContent"),
  { 
    ssr: false,
    loading: () => (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="w-full max-w-xl border border-zinc-800 rounded-2xl p-8 text-center text-zinc-500">
          Loading App...
        </div>
      </main>
    )
  }
)

export default function Home() {
  return <DynamicStacksAnalizer />
}
