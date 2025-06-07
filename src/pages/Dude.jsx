import React from 'react'
import './dude.css'
import Img1 from './../Assets/img1.png'
import {Link} from 'react-router-dom'

const Dude = () => {
  return (
    <div className='dude-page'>
            <img className='dude-img' src={Img1} alt=''></img>
            <h1>Hello There!</h1>
            <h3>Do you play video games?</h3>
            <div className='choice'>
                <Link to='/Dude/Gamer'><button>Yes</button></Link>
                <Link to='/*'><button>No</button></Link>
            </div>
            <div className='hidden'>
                <p>Are you anis by any chance?</p>
                <Link to='/Dude/flip'><button>Yes</button></Link>
            </div>
        </div>
  )
}

export default Dude