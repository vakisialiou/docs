import {ReactNode} from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-amber-50 p-2">
      {children}
    </div>
  )
}
