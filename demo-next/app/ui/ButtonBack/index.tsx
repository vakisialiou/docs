'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function ButtonBack(
  { children }:
  { children: React.ReactNode }
) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.back()}
      className="border bg-blue-700 hover:bg-blue-800 active:bg-blue-900 px-2 cursor-pointer"
    >
      {children}
    </div>
  )
}
