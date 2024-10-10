export const dynamic = 'force-dynamic'

const getData = (): Promise<{ id: number, timestamp: number }> => {
  const timestamp = Date.now()
  console.log('-------------------- SSR getData --------------------')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        timestamp,
        id: Math.floor(Math.random() * 1000)
      })
    }, 1000)
  })
}

export default async function Page() {
  const data = await getData()
  console.log('-------------------- SSR render --------------------')
  return (
    <div className="flex flex-col">
      <h1>Серверная страница (SSR)</h1>
      <div>ID: {data.id}</div>
      <div>Timestamp: {data.timestamp}</div>
    </div>
  )
}
