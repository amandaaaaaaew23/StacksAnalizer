import dynamic from "next/dynamic"

// Mengimpor komponen secara dinamis dan mematikan SSR (Server-Side Rendering) total.
// Karena file ini sekarang adalah Server Component (tidak ada "use client"),
// modul Web3 di dalamnya dipastikan hanya akan dimuat di browser.
const StacksAnalizerContent = dynamic(
  () => import("./StacksAnalizerContent"),
  { ssr: false }
)

export default function Home() {
  return <StacksAnalizerContent />
}
