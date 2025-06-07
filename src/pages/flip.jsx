import React from 'react'
import './dude.css'
import Flip from './../Assets/flip.png'

const flip = () => {
  return (
    <div className='dude-page'>
        <h2>cnx ta3ek khra</h2>
        <img className='dude-img' src={Flip}></img>
    </div>
  )
}

export default flip