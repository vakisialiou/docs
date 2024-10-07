import Link from 'next/link'

function Page({ params }: { params: { id: number } }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">

      <div>
        <Link
          href="/routes/shop"
          className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
        >
          {`< Back`}
        </Link>
      </div>

      <div className="flex justify-center bg-sky-900 p-2">Shop Id {params.id}</div>

    </div>
  )
}

export default Page
