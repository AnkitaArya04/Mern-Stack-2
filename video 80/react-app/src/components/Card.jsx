import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://i.pinimg.com/736x/7a/32/43/7a324308ed63207d61f0118d8d7c0af7.jpg" alt="" width={300} 
        style={{border:"2px solid black",overflow:"hidden"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
