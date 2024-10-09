import React from 'react'

export default function ButtonBack(
  { children, onClick }:
  { children: React.ReactNode, onClick: () => void }
) {

  return (
    <div
      onClick={onClick}
      className="border bg-blue-700 hover:bg-blue-800 active:bg-blue-900 px-2 cursor-pointer select-none"
    >
      {children}
    </div>
  )
}
