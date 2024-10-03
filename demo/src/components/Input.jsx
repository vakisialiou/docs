import React from 'react'

function Input(props) {
    return (
        <input
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            type={props.type || 'text'}
            placeholder={props.placeholder}
            className="border outline-1 outline-sky-500 px-2 text-sm py-1 w-40 max-w-40"
        />
    )
}

export default Input