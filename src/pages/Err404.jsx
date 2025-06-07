import React from 'react'
import './err.css'
import {Link} from 'react-router-dom'

const Err404 = () => {
  return (
    <div className='main-page'>
        <h3>if you are here, chances are you chose a wrong answer, or u messed up.</h3>
        <Link to='/home'><button>go back</button></Link>
        </div>
  )
}

export default Err404