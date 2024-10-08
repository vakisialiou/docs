import Link from 'next/link'

async function getData() : Promise<Array<number>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5])
    }, 3000)
  })
}

export default async  function Page() {
  const pages = await getData()
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex gap-2">
        {pages.map((page) => {
          return (
            <Link
              key={page}
              href={`/routes/load/${page}`}
              className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
            >
              Local page {page}
            </Link>
          )
        })}

        <Link
          href={`/routes/load/2`}
          className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
        >
          Local page 2
        </Link>
      </div>
      <div className="flex items-center justify-center w-40 h-40 bg-sky-500">Page data</div>
    </div>
  )
}
