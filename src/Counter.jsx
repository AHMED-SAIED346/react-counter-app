
import { useState } from "react"
export default function Counter() {
  const [count, setCount] = useState(0)
  let handleClickIncrement = () => {
    setCount(prev => prev + 1)
  }
  let handleClickDecrement = () => {
    setCount(prev => prev - 1)
  }
  let handleClickRestart = () => {
    setCount(0)
  }
  return (
    <div className="div">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="flex">
        <button onClick={handleClickIncrement}>Increment</button>
        <button onClick={handleClickDecrement}>Decrement</button>
        <button onClick={handleClickRestart}>Restart</button>
      </div>
    </div>
  )
}