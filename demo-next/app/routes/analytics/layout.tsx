import React from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <Link href={'/routes/analytics/test-1'} className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2">Test - 1</Link>
        <Link href={'/routes/analytics/test-2'} className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 p-2">Test - 2</Link>
      </div>

      <input
        placeholder="Placeholder Layout"
        className="border border-gray-500 p-2 text-gray-500 outline-0 focus:border-1 focus:border-blue-500"
      />

      {children}

      <small>Layout Footer</small>
    </section>
  )
}
