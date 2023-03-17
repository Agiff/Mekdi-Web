import React from 'react'

const InfoCard = ({ imageUrl }) => {
  return (
    <div className='card custom-shadow' style={{cursor: 'pointer'}}>
      <img src={imageUrl} alt="Info Card"
      width={'350'}/>
    </div>
  )
}

export default InfoCard
