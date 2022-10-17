import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-container'>
        <img src={require('../icons/profile.png')} alt="" />
        <Link to="/"><img src={require('../icons/paw.png')} alt="" /></Link>
        <Link to="/liked"><img src={require('../icons/favorite.png')} alt="" /></Link>
    </div>
    
  )
}
