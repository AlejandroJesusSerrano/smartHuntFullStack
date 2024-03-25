import { useState } from "react"

export const Counter = () => {
  const [click, setClick] = useState(0)
  const [date, setDate] = useState(Date.now)

  const clicked = () => {
    setClick (click + 1)
    setDate (Date.now())
  };

  return (
    <div>
      <h2>{click}</h2>
      <h4>{date}</h4>
      <button onClick={clicked}>Click</button>
    </div>
  )
}

export default Counter
