import React, { useLayoutEffect, useReducer, useRef } from 'react'

function paramsReducer(state, action) {
    switch (action.type) {
        case 'UPDATE':
            return {
                width: action.width,
                height: action.height,
            }
        default:
            return state
    }
}

function WidthUseLayoutEffect() {
    const ref = useRef(null)
    const [ { width, height }, dispatch ] = useReducer(paramsReducer, { width: 0, height: 0 })

    useLayoutEffect(() => {
        const rect = ref.current.getBoundingClientRect()
        dispatch({ type: 'UPDATE', width: rect.width, height: rect.height })
    }, [])

    return (
        <div ref={ref} className="flex flex-col bg-sky-200 w-40 h-20 items-center justify-center">
            <div>Width: {width}px</div>
            <div>Height: {height}px</div>
        </div>
    )
}

export default WidthUseLayoutEffect