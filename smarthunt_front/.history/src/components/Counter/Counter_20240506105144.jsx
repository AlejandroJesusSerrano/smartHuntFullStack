import { useState } from "react"

export const Counter = () => {
  let pcQ = 6
  const [stock, setStock] = useState(pcQ)
  const [quant, setQuant] = useState(0)
  const [date, setDate] = useState(Date)
  const [msg, setMsg] = useState(`Disponibles: ${pcQ} `)

  const stockControl = () => {
      if (quant < stock) {
        setQuant (quant + 1)
        setStock (pcQ--)
        setMsg(`Disponibles ${pcQ - quant}`)
        setDate (Date())
      }
      else {
        setMsg('Lo sentimos, no tenemos mas stock')
      }
    }

  return (
    <div className="card col col-2">
      <div className="card-header row-cols-3">
        <button type="button" className="btn btn-primary btn-sm" onClick={stockControl}>+</button>
        <h4>{quant}</h4>
        <button type="button" className="btn btn-danger btn-sm" onClick={stockControl}>-</button>
      </div>
      <div className="card-body">
        <h5>{msg}</h5>
      </div>
      <div className="card-footer">
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Counter;
