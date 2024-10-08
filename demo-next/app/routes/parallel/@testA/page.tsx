import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-2 bg-blue-700 p-2">
      <div>Test content A</div>

      <Link href="./parallel/settings" className="p-2 bg-amber-400">Page Settings</Link>
      <Link href="./parallel/visitors" className="p-2 bg-amber-400">Page Visitors</Link>
    </div>
  )
}
