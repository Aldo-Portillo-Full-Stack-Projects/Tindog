import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home-page login-register-page'>
      <img src={require("../icons/firePaw.png")} alt=""/>
        <h2>Welcome to Tindog</h2>
        <h3>Meet your best friend</h3>
        <div className='home-page-buttons'>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
        
    </div>
  )
}
