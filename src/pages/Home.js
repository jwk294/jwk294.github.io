import React from 'react'
import './../App.css'
import logo from './../Assets/img4.png'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Are You a dude or a Girlie?
        </p>
        <div className='home-buttons'>
            <div><Link to='/Dude'><button className='home-button'>Dude</button></Link></div>
            <div><Link to='/Girlie'><button className='home-button'>Girlie</button></Link></div> 
        </div>
      </header>
    </div>
  )
}

export default Home