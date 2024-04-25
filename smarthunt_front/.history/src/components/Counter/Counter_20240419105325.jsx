import { useState } from "react"

export const Counter = () => {
  const stock = 4
  const [click, setClick] = useState(0)
  const [date, setDate] = useState(new Date())
  const [msg, setMsg] = useState(`Disponibles: ${stock - click}`)

  function stockControl = () => {
      if (click < stock) {
        setClick (click + 1)
        setDate (new Date())
      }
      else {
        setMsg('Lo sentimos, no tenemos mas stock')
      }
    }

  return (
    <div>
      <h2>{click}</h2>
      <h5 className="display-8">{msg}</h5>
      <h4>{date}</h4>
      <button onClick={stockControl()}>Click</button>
    </div>
  )
}

export default Counter;
