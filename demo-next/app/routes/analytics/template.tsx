import React from 'react'

export default function Template(
  { children, left, right }:
    {
      children: React.ReactNode,
      left: React.ReactNode,
      right: React.ReactNode,
    }
) {
  return (
    <div className="flex items-center">
      <div className="bg-sky-400 h-40 w-40 flex items-center justify-center">
        {left}
      </div>

      <div className="bg-sky-500 h-40 flex flex-col items-center justify-center gap-2 p-4">
        <input
          placeholder="Placeholder Template"
          className="border border-gray-500 p-2 text-gray-500 outline-0 focus:border-1 focus:border-blue-500"
        />
        {children}
      </div>

      <div className="bg-sky-600 h-40 w-40 flex items-center justify-center">
        {right}
      </div>
    </div>
  )
}
