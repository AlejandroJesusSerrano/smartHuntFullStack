import React from 'react'

export const ItemListContainer = ({saludo}) => {
  return (
    <div>
      <ul>
        <li>
          <h1 className='display-1'>{saludo}</h1>
          </li>
      </ul>
    </div>
  )
}
