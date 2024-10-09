'use client'
import React, { useState } from 'react'
import Tabs from './../Tabs'

export default function Tabs2(
  { tabs, activeTabId }:
    { tabs: Array<{ id: number, label: string, content: React.ReactNode }>, activeTabId: number }
) {
  const [tabId, setActiveTabId] = useState(activeTabId)
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-center">{tabId}</div>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onChange={(id) => setActiveTabId(id)}
      />
    </div>
  )
}
