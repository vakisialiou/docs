import Link from 'next/link'

function Page() {
  return (
    <div className="flex flex-col p-2 gap-2 items-center">
      <h1>Select fail page for test</h1>

      <div className="flex gap-2">
        <Link
          href={`/routes/fail/error/1`}
          className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
        >
          Local Error
        </Link>

        <Link
          href={`/routes/fail/global-error/1`}
          className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
        >
          Global Error
        </Link>

        <Link
          href={`/routes/fail/no-exists`}
          className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
        >
          Not found
        </Link>
      </div>
    </div>
  )
}

export default Page
