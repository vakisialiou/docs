import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
      >
        Home
      </Link>
    </div>
  )
}
