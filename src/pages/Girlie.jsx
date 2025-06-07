import React from 'react'
import './girlie.css'
import Img7 from './../Assets/img7.png'
import {Link} from 'react-router-dom'

const Girlie = () => {
  return (
    <div className='girlie-page'>
        <img className='girlie-img' src={Img7} alt=''></img>
        <h1>Hello There!</h1>
        <p>Do you like Strawberries?</p>
        <div className='choice'>
            <Link to='/Girlie/strawberry'><button>Yes</button></Link>
            <Link to='*'><button>No</button></Link>
        </div>
    </div>
  )
}

export default Girlie