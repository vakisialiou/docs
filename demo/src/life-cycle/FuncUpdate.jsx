import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import Button from '@components/Button'

const MountingExample = ({ value }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('3. Компонент был смонтирован')
    }, [])

    useEffect(() => {
        console.log('4. Обновление локального состояния на основе props')
    }, [value])

    useLayoutEffect(() => {
        console.log('2. Снятие снимка перед обновлением дом на основе props')
    }, [value])

    const handleIncrement = useCallback(() => setCount((count) => count + 1), [])

    console.log('1. Render: Отрисовка компонента')

    return (
        <div className="flex gap-4 text-sm">
            <Button onClick={handleIncrement}>Increment Count</Button>
            <p>Count: {count}</p>
            <p>Value: {value}</p>
        </div>
    )
}

export default function FuncUpdate() {
    const [mounted, setMount] = useState(false)
    const [value, setValue] = useState(0)

    return (
        <div className="flex gap-4 items-center">
            <Button onClick={() => setMount(!mounted)}>
                {mounted ? 'Unmount' : 'Mount'}
            </Button>
            {mounted &&
                <Button onClick={() => setValue(value + 1)}>
                    Increment Value
                </Button>
            }
            {mounted && <MountingExample value={value}/>}
        </div>
    )
}