import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-container'>
        <Link to="/"><h1>Profile</h1></Link>
        <Link to="/liked">Liked</Link>
    </div>
    
  )
}
