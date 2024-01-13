import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)

    const increase = () => {
        setCount(count + +value)
    }
    const decrease = () => setCount((prev) => prev - +value)

    const handleOnchangeInput = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <h1>나의 첫번째 카운트 앱</h1>
            {count}
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
            <input type="number" name="" id="" onChange={handleOnchangeInput} value={value} />
        </>
    )
}

export default App
