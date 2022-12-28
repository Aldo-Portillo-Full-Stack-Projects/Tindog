import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home-page'>
        <h1>Welcome to Tindog</h1>
        <h3>Meet your best friend</h3>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  )
}
