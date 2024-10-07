import Link from 'next/link'

function Page() {
  return (
    <div className="flex flex-col">
      <h1>Fail Page</h1>

      <Link
        href={`/routes/fail/1`}
        className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
      >
        Emulate Error page
      </Link>
    </div>
  )
}

export default Page
