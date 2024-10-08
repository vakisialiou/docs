
async function getData() : Promise<Array<number>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5])
    }, 3000)
  })
}

export default async function Page() {
  const data = await getData()
  return (
    <div>
      Test content B {JSON.stringify(data, null, 2)}
    </div>
  )
}
