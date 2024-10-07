import Link from 'next/link'

function Page() {
  const shops = [1, 2, 3, 4, 5]
  return (
    <div className="flex flex-col gap-2">
      <h1>Shop Page</h1>
      <ol className="flex flex-col gap-4">
        {shops.map((shop) => {
          return (
            <li key={shop}>
              <Link
                href={`/routes/shop/${shop}`}
                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
              >
                Store - {shop}
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Page
