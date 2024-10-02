import React, {useState, useInsertionEffect, useRef} from 'react'

function BlockUseInsertionEffect() {
    const [active, setActive] = useState(false)
    const ref = useRef(null)

    useInsertionEffect(() => {
        if (ref.current) {
            ref.current.style.backgroundColor = active ? 'green' : 'red';
        }
    }, [ref, active])

    return (
        <div
            id="block"
            ref={ref}
            onClick={() => setActive(!active)}
            className="flex items-center justify-center w-40 h-10"
        >
            Click me
        </div>
    )
}

export default BlockUseInsertionEffect