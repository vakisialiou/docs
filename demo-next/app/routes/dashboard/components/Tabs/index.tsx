'use client'
import React, { useState, useEffect } from 'react'
import Button from '@app/ui/Button'

export default function Tabs(
  { tabs, activeTabId, onChange }:
  {
    tabs: Array<{ id: number, label: string, content: React.ReactNode }>,
    activeTabId: number,
    onChange: (tabId: number) => void
  }
) {
  const [activeTab, setActiveTab] = useState(activeTabId)
  useEffect(() => {
    if (onChange && activeTabId !== activeTab) {
      onChange(activeTab)
    }
  }, [activeTab])

  const tab = tabs.find(({ id }) => id === activeTab) || tabs[0]
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex gap-2">
        {tabs.map((tab) => {
          return (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          )
        })}
      </div>
      <div>{tab.content}</div>
    </div>
  )
}
