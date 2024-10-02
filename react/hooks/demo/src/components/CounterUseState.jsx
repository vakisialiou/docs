import React, { useState } from 'react'

function CounterUseState() {
    const [count, setCount] = useState(0)
    return (
        <button onClick={() => setCount(count + 1)}>
            Click me {count}
        </button>
    )
}

export default CounterUseState