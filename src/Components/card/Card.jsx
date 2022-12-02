import React from 'react'
import zapa1 from '../../img/1.png'
import './card.scss'

const Card = () => {
  return (
    
    <div className='card'>
        <div className='card-Img'>
            <img src={zapa1} alt=".." />
            <ion-icon className="star " name="star-outline"></ion-icon>
        </div>

        <div className='card-content'>
            <h3>Zapa Jaguar X</h3>
            <p>zapatilliki jaguar cheta</p>
            <button>agregar al cayito</button>
        </div>

    </div>
  )
}

export default Card