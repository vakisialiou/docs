import Link from 'next/link'

export default function Page() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap w-96 gap-2 justify-center">
        {items.map((item) => {
          return (
            <Link key={item} href={`/routes/intercept/photos/${item}`}>
              <div
                className="flex w-40 h-40 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 items-center justify-center cursor-pointer select-none"
              >
                {item}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
