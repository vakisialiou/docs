"use client"

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div>Root Error Page</div>
      <h2>Something went wrong!</h2>
      <div>{error.message}</div>

      <button
        className="border p-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
