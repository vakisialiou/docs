import Link from 'next/link'

async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ timestamp: Date.now() })
    }, 3000)
  })
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData()

  return (
    <div className="flex flex-col items-center gap-2">

      <Link
        href={`/routes/load`}
        className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2"
      >
        Back to load
      </Link>

      <div className="flex flex-col items-center justify-center w-80 h-40 bg-sky-300 gap-2">
        <div>Loading page {params.id}</div>
        <div>Data {JSON.stringify(data)}</div>
      </div>
    </div>
  )
}
