import { useState } from "react"

export const Counter = () => {
  let pcCant = 6
  const [stock, setStock] = useState(pcCant)
  const [click, setClick] = useState(0)
  const [date, setDate] = useState(Date)
  const [msg, setMsg] = useState(`Disponibles: ${pcCant} `)

  const stockControl = () => {
      if (click < stock) {
        setClick (click + 1)
        setStock (pcCant--)
        setMsg(`Disponibles ${pcCant - click}`)
        setDate (Date())
      }
      else {
        setMsg('Lo sentimos, no tenemos mas stock')
      }
    }

  return (
    <div>
      <h2>{click}</h2>
      <h5>{msg}</h5>
      <h4>{date}</h4>
      <button onClick={stockControl}>Click</button>
    </div>
  )
}

export default Counter;
