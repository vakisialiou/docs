import React, { useState, useMemo } from 'react'
import Button from './Button'

const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {} // Имитация долгой работы
    return num * 2;
}

function ExpensiveCalculationUseMemo() {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    const memoizedValue = useMemo(() => expensiveCalculation(countA), [countA])

    return (
        <div className="flex flex-col gap-0">
            <p className="text-sm">Memoized Value: {memoizedValue} depend on CountA</p>

            <div className="flex items-center gap-4">
                <Button onClick={() => setCountA(countA + 1)}>CountA {countA}</Button>
                <Button onClick={() => setCountB(countB + 1)}>CountB {countB}</Button>
            </div>
        </div>
    )
}

export default ExpensiveCalculationUseMemo