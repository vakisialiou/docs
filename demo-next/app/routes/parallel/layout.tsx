import React from 'react'

export default function Layout(
  { children, testC, testD, testA, testB }:
  {
    children: React.ReactNode,
    testA: React.ReactNode,
    testB: React.ReactNode,
    testC: React.ReactNode,
    testD: React.ReactNode,
  }
) {
  return (
    <div className="flex flex-col gap-2 items-center">
      {testA}
      {testB}
      {children}
      {testC}
      {testD}
    </div>
  )
}
