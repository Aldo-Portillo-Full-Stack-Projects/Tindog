import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-container'>
        <Link to="/profile"><img src={require('../icons/profile.png')} alt="" className='header-icon-sides profile'/></Link>
        <Link to="/swipe"><img src={require('../icons/paw.png')} alt="" /></Link>
        <Link to="/liked"><img src={require('../icons/favorite.png')} alt="" className='header-icon-sides liked'/></Link>
    </div>
    
  )
}
