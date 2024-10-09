'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Button from '@app/ui/Button'

export default function ButtonBack(
  { children }:
  { children: React.ReactNode }
) {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.back()}
    >
      {children}
    </Button>
  )
}
