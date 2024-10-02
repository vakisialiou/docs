import React, {useImperativeHandle, forwardRef, useRef, useState} from 'react'
import Button from './Button'

const ChildUseImperativeHandle = forwardRef((prop, ref) => {
    const [value, setValue] = useState(prop.value || '')
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => {
        return {
            clear: () => setValue(''),
            focus: () => inputRef.current.focus(),
            reset: () => setValue(prop.value || ''),
            setCustomValue: (customValue) => setValue(customValue)
        }
    })

    return (
        <div>
            <input
                ref={inputRef}
                value={value}
                placeholder={prop.placeholder}
                onChange={(e) => setValue(e.target.value)}
                className="border outline-1 outline-sky-500 px-2 text-sm py-1 w-40"
            />
        </div>
    )
})

function ParentUseImperativeHandle() {
    const inputRef = useRef();
    return (
        <div className="flex items-center gap-4">
            <ChildUseImperativeHandle
                value="Hi"
                ref={inputRef}
                placeholder="Enter something"
            />

            <Button onClick={() => inputRef.current.clear()}>Clear Input</Button>
            <Button onClick={() => inputRef.current.focus()}>Focus Input</Button>
            <Button onClick={() => inputRef.current.reset()}>Reset Input</Button>
            <Button onClick={() => inputRef.current.setCustomValue('Hello, world!')}>Custom Value</Button>
        </div>
    )
}

export default ParentUseImperativeHandle