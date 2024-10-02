import React, { useState, useEffect } from 'react'

function CounterUseEffect() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [title, setTitle] = useState('Even title 0');

    useEffect(() => {
        setTitle(count1 % 2 === 1 ? `Odd title ${count1}`: `Even title ${count1}`)
    }, [count1])

    return (
        <div>
            <button onClick={() => setCount1(count1 + 1)}>Click me {count1}</button>
            <button onClick={() => setCount2(count2 + 1)}>Click me {count2}</button>
            {title}
        </div>
    )
}

export default CounterUseEffect