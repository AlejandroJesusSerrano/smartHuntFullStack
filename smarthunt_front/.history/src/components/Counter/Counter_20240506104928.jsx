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
    <div className="card col col-2 w-100">
      <div className="card-header">
        <h4>{quant}</h4>
      </div>
      <div className="card-body">
        <button type="button" className="btn btn-primary" onClick={stockControl}>Agregar</button>
        <h5>{msg}</h5>
      </div>
      <div className="card-footer">
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Counter;
