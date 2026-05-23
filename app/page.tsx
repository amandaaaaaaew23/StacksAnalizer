"use client"

import dynamic from "next/dynamic"

// Memuat komponen secara dinamis dan mematikan SSR.
// Karena file ini adalah Client Component ("use client"),
// Next.js mengizinkan penggunaan { ssr: false }.
const StacksAnalizerContent = dynamic(
  () => import("./StacksAnalizerContent"),
  { ssr: false }
)

export default function Home() {
  return <StacksAnalizerContent />
}
