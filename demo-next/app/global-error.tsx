'use client'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <h2>Error global Layout</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
