import React, { useState, useRef, memo, useCallback } from 'react'
import Button from '@components/Button'
import Input from '@components/Input'

const ChildMemo = memo(({ value }) => {
    const iMemo = useRef(0)
    iMemo.current++
    return (
        <div>ChildMemo value: {value} Render count {iMemo.current}</div>
    )
})

export const ChildSimple = ({ value }) => {
    const iSimple = useRef(0)
    iSimple.current++
    return (
        <div>ChildSimple value: {value} Render count {iSimple.current}</div>
    )
}

function FuncMemo() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const incrementCallback = useCallback(() => setCount((count) => count + 1), [])
    const textCallback = useCallback((e) => setText(e.target.value), [])

    return (
        <div className="flex items-center gap-4">
            <h1 className="w-40">Count: {count}</h1>
            <Button onClick={incrementCallback}>Increment</Button>

            <Input
                value={text}
                onChange={textCallback}
                placeholder="Type something"
            />

            <div className="flex flex-col">
                <ChildMemo value={count} />
                <ChildSimple value={count} />
            </div>
        </div>
    )
}

export default FuncMemo