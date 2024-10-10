
async function getData() {
  console.log('-------------------- SSG getData --------------------')
  return {
    id: Math.floor(Math.random() * 1000),
    timestamp: Date.now(),
  }
}

export default async function Page() {
  const params = await getData()
  console.log('-------------------- SSG render --------------------')
  return (
    <div className="flex flex-col">
      <h1>Статическая страница (SSG)</h1>
      <div>ID: {params.id}</div>
      <div>Timestamp: {params.timestamp}</div>
    </div>
  )
}
