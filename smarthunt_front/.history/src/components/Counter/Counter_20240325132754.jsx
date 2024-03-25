import { useState } from "react"

export const Counter = () => {

  const [click, setClick] = useState(0)

  const clicked = () => {
    setClick (click + 1 && Date)
  };

  return (
    <div>
      <h2>{click}</h2>
      <button onClick={clicked}>Click</button>
    </div>
  )
}

export default Counter
