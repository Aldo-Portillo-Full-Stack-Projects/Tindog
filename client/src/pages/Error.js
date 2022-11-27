import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='error'>
        <h3>No more good boys in your area</h3>
        <p>Try again soon!</p>
        <p>Click the pup to look at your favorite goodboys</p>
        <Link to="/liked"><img src={require('../icons/dog-icon.png')} alt="" className='error-image'/></Link>
    </div>
  )
}
