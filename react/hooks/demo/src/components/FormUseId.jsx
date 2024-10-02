import React, { useId, useState } from 'react'
import Button from './Button'
import Input from './Input'

function FormUseId() {
    const [count, setCount] = useState(0)
    const id = useId()


    return (
        <div className="flex items-center gap-4">
            <div className="text-sm w-40">{id}</div>
            <div className="flex items-end gap-4">
                <div className="flex flex-col">
                    <label htmlFor={`${id}-name`}>Name</label>
                    <Input id={`${id}-name`}/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor={`${id}-email`}>Email</label>
                    <Input id={`${id}-email`}/>
                </div>


                <Button onClick={() => setCount(count + 1)}>Click me {count}</Button>
            </div>
        </div>
    )
}

export default FormUseId