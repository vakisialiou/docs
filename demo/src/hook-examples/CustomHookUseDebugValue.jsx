import React, { useState, useDebugValue } from 'react'
import Button from '@components/Button'

function useCustomHook(v) {
    const [value, setValue] = useState(v)

    useDebugValue(value > 5 ? "High" : "Low");

    return [ value, setValue ]
}

function CustomHookUseDebugValue() {
    const [count, setCount] = useCustomHook(0)
    return (
        <Button onClick={() => setCount(count + 2)}>Click me {count}</Button>
    )
}

export default CustomHookUseDebugValue