import React from 'react'
import './dude.css'
import Img8 from './../Assets/img8.png'

const Gamer = () => {
  return (
    <div className='dude-page'>
        <h1>Let's Play Games Together!</h1>
        <h2>User: jayonawalk</h2>
        <img className='dude-img' src={Img8}></img>
    </div>
  )
}

export default Gamer