import dynamic from "next/dynamic"

// Mengimpor komponen secara dinamis dan mematikan SSR (Server-Side Rendering) total untuk file ini
const StacksAnalizerContent = dynamic(
  () => import("./StacksAnalizerContent"),
  { ssr: false }
)

export default function Home() {
  return <StacksAnalizerContent />
}
