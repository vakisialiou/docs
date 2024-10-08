import Link from 'next/link'
import ButtonBack from '@app/ui/ButtonBack'

export default function Page() {
  return (
    <div className="flex bg-emerald-600 gap-2 items-center justify-center px-2">
      Test content A Visitors

      <Link href="./" className="py-1 p-3 bg-amber-400">x</Link>
      <ButtonBack>Back</ButtonBack>
    </div>
  )
}
