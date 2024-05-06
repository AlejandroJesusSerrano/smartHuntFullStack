import { useState } from "react"

export const Counter = () => {
  let pcQ = 6
  const [stock, setStock] = useState(pcQ)
  const [quant, setQuant] = useState(0)
  const [date, setDate] = useState(Date)
  const [msg, setMsg] = useState(`Disponibles: ${pcQ} `)

  const stockAdd = () => {
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

  const stockRemove = () => {
    if (quant !== 0) {
      setQuant (quant - 1)
      setStock (pcQ++)
      setMsg(`Disponibles ${pcQ - quant}`)
      setDate (Date())
    }
    else {
      setMsg('Lo sentimos, debe agregar al menos un producto')
    }
  }

  return (
    <div className="card col col-2">
      <div className="card-header d-flex justify-content-evenly">
        <button type="button" className="btn btn-primary btn-sm" onClick={stockAdd}>+</button>
        <h4>{quant}</h4>
        <button type="button" className="btn btn-danger btn-sm" onClick={stockRemove}>-</button>
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
