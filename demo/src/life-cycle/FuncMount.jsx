import React, { useState, useEffect } from 'react'
import Button from '@components/Button'

function MountingExample() {
    const [data, setData] = useState(null)

    useEffect(() => {
        console.log('2. Компонент был смонтирован')
        const timer = setTimeout(() => setData('Загруженные данные'), 2000)
        return () => clearTimeout(timer)
    }, [])

    console.log('1. Отрисовка компонента')

    return (
        <div className="flex gap-4 text-sm">
            <h1 className="w-40">Монтирование</h1>
            <p className="w-40">{data ? data : 'Загрузка...'}</p>
        </div>
    )
}

export default function FuncMount() {
    const [mounted, setMount] = useState(false)

    return (
        <div className="flex gap-4 items-center">
            <Button onClick={() => setMount(!mounted)}>
                {mounted ? 'Unmount' : 'Mount'}
            </Button>
            {mounted && <MountingExample/>}
        </div>
    )
}