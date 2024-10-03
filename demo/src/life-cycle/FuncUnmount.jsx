import React, { useState, useEffect } from 'react'
import Button from '@components/Button'

function UnmountingExample() {

    useEffect(() => {
        return () => {
            console.log('Компонент размонтируется')
        }
    }, [])

    return (
        <div className="text-sm">
            <h1>Click unmount</h1>
        </div>
    )
}

export default function FuncUnmount() {
    const [mounted, setMount] = useState(false)
    return (
        <div className="flex gap-4 items-center">
            <Button onClick={() => setMount(!mounted)}>
                {mounted ? 'Unmount' : 'Mount'}
            </Button>
            {mounted && <div className="w-40"><UnmountingExample/></div>}
        </div>
    )
}