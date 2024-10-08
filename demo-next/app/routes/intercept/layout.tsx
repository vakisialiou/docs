import React from 'react'

export default function Layout({ children, modal }: { children?: React.ReactNode, modal: React.ReactNode }) {
  return (
    <div data-attr="layout">
      {children}
      {modal}
    </div>
  )
}
