import React, {useSyncExternalStore, useRef, useCallback} from 'react'

function getSnapshot(element) {
    const width = element ? element.offsetWidth : 0
    const height = element ? element.offsetHeight : 0

    return { width, height, hash: `${width}:${height}` }
}

function ResizableUseSyncExternalStore() {
    const ref = useRef(null)
    const cachedSnapshot = useRef(getSnapshot(ref.current))

    const subscribe = useCallback((callback) => {
        if (!ref.current) {
            return
        }

        const observer = new ResizeObserver(callback)
        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [ref])

    const size = useSyncExternalStore(
        subscribe,
        () => {
            const currentSnapshot = getSnapshot(ref.current)
            if (currentSnapshot.hash !== cachedSnapshot.current.hash) {
                cachedSnapshot.current = currentSnapshot
            }
            return cachedSnapshot.current
        }
    )

    return (
        <div>
            <p>{`Width: ${size.width}px`}</p>
            <p>{`Height: ${size.height}px`}</p>
            <textarea className="resize max-w-40 max-h-20 border" disabled ref={ref}></textarea>
        </div>
    )
}

export default ResizableUseSyncExternalStore