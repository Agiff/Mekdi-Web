import React from 'react'

const MenuRow = ({ name }) => {
  return (
    <div className='fs-5' style={{ color: '#A25716', cursor: 'pointer' }}>
      <p>{name}</p>
    </div>
  )
}

export default MenuRow
