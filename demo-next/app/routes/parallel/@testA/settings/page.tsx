import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex bg-emerald-600 gap-2 items-center justify-center pl-2">
      Test content A settings

      <Link href="./" className="py-1 p-3 bg-amber-400">x</Link>
    </div>
  )
}
