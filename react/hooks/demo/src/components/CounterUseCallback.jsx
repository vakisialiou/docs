import React, { useState, useCallback } from 'react'
import Button from './Button'

let rememberCallback = null
function CounterUseCallback() {
    const [count, setCounter] = useState(0)
    const callback = useCallback(() => {
        setCounter((prevCount) => prevCount + 1)
    }, [])

    const isCallbackSame = callback === rememberCallback
    rememberCallback = callback

    return (
        <div className="flex gap-4">
            <p className="w-40">Count: {count}</p>
            <Button onClick={callback}>Increment</Button>
            <p className="w-40">Is Callback Same: {isCallbackSame ? 'true' : 'false'}</p>
        </div>
    )
}

export default CounterUseCallback