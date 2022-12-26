import React from 'react'

export default function Profile({img, name, age, bio, displayIcon, renderIcon}) {


  return (
    <div className='profile-container'>
          {renderIcon && <img className='liked-nope-image' src={displayIcon ? require('../icons/like-image.png'): require('../icons/nope-image.png') } alt="" />}
        <img className='dog-image' alt="" src={img}/>
        <div className='profile-info'>
          <h3>{name}, {age}</h3>
          <h5>{bio}</h5>
        </div>
    </div>
    
  )
}
