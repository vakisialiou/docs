import React, { useState, useTransition, useCallback } from 'react'
import Input from '@components/Input'

const items = Array.from({ length: 100000 }, (_, i) => `Item ${i + 1}`);

function ListUseTransition() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredResults, setFilteredResults] = useState([...items].splice(0, 10))
    const [isPending, startTransition] = useTransition()

    const handleChange = useCallback((e) => {
        const query = e.target.value
        setSearchQuery(query)

        startTransition(() => {
            setTimeout(() => {
                const filtered = items.filter(item =>
                    item.toLowerCase().includes(query.toLowerCase())
                )
                setFilteredResults([...filtered].splice(0, 10))
            }, 0)
        })
    }, [])

    return (
        <div className="flex gap-4">
            <div className="w-40">
                <Input
                    value={searchQuery}
                    placeholder="Search..."
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col h-20 p-0 m-0 overflow-y-scroll border">
                {filteredResults.map((item, i) => {
                    return (
                        <div className="w-40" key={i}>{item}</div>
                    )
                })}
            </div>
            <div>
                {isPending && 'Loading...'}
            </div>
        </div>
    )
}

export default ListUseTransition