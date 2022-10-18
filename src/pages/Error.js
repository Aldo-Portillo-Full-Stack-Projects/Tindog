import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='Error'>
        <h3>No more good boys in your area</h3>
        <p>Try again soon!</p>
        <p>Click the paw to look at your favorite goodboys</p>
        <Link to="/liked"><img src={require('../icons/dog-icon.png')} alt=""/></Link>
    </div>
  )
}
