import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center">
      <small>Layout Header</small>

      <div className="bg-sky-500 h-40 w-40 flex items-center justify-center">{children}</div>

      <small>Layout Footer</small>
    </section>
  )
}
