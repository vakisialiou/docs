import React, { useRef } from 'react'
import Button from './Button'

function InputUseRef() {
    const inputRef = useRef(null)
    const handleFocus = () => inputRef.current.focus()
    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                ref={inputRef}
                placeholder="Enter something"
                className="border outline-1 outline-sky-500 px-2 text-sm py-1 w-40"
            />
            <Button onClick={handleFocus}>Focus the input</Button>
        </div>
    )
}

export default InputUseRef