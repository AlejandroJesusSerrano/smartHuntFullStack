import { useState } from "react"

export const Counter = () => {
  const stock = 4
  const [click, setClick] = useState(0)
  const [date, setDate] = useState(Date)
  let msg

  function stockControl (clicked) {
    msg = 'disponibles:' + (click - stock)
    if (click < stock) {
    const clicked = () => {
      setClick (click + 1)
      setDate (Date())
    };
      return clicked
    }
    else {
      msg =  'Lo sentimos, no tenemos mas stock'
    }
}

  return (
    <div>
      <h2>{click}</h2>
      <h5 className="display-6">{msg}</h5>
      <h4>{date}</h4>
      <button onClick={stockControl()}>Click</button>
    </div>
  )
}

export default Counter
