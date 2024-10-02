import React, { useState, useCallback, useDeferredValue, useMemo } from 'react'
import Input from './Input'

function ListUseTransition() {
    const [searchQuery, setSearchQuery] = useState('')
    const deferredQuery = useDeferredValue(searchQuery)

    const items = useMemo(() => {
        return Array.from({ length: 100000 }, (_, i) => `Item ${i + 1}`)
    }, [])

    const filtered = useMemo(() => {
        return items.filter(item => item.toLowerCase().includes(deferredQuery.toLowerCase()))
    }, [items, deferredQuery])

    const handleChange = useCallback((e) => setSearchQuery(e.target.value), [])

    return (
        <div className="flex gap-4">
            <div className="flex flex-col w-40">
                <Input
                    value={searchQuery}
                    placeholder="Search..."
                    onChange={handleChange}
                />

                <div className="flex flex-col">
                    <div>Equal value: {deferredQuery === searchQuery ? 'true' : 'false'}</div>
                </div>
            </div>

            <div className="flex flex-col h-20 overflow-y-scroll border">
                {[...filtered].splice(0, 10).map((item, i) => {
                    return (
                        <div className="w-40" key={i}>{item}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListUseTransition