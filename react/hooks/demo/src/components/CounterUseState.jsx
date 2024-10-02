import React, { useState } from 'react'
import Button from './Button'

function CounterUseState() {
    const [count, setCount] = useState(0)
    return (
        <Button onClick={() => setCount(count + 1)}>
            Click me {count}
        </Button>
    )
}

export default CounterUseState