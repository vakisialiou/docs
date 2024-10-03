import React, { useState, useEffect } from 'react'
import Button from '@components/Button'

function CounterUseEffect() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [title, setTitle] = useState('Even title 0');

    useEffect(() => {
        setTitle(countA % 2 === 1 ? `Odd title ${countA}`: `Even title ${countA}`)
    }, [countA])

    return (
        <div className="flex items-center gap-4">
            <Button onClick={() => setCountA(countA + 1)}>
                Counter A {countA}
            </Button>
            <Button onClick={() => setCountB(countB + 1)}>
                Counter B {countB}
            </Button>
            <div className="w-80">Depend on counterA: {title}</div>
        </div>
    )
}

export default CounterUseEffect