import React from 'react'

export default function Profile({img, name, age, bio}) {

  const stateVar = true;


  return (
    <div className='profile-container' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat'}}>
        {/* <img src={img} alt="" /> */}
        <div className='liked-box'>
          <img className='liked-nope-image' src={stateVar ? require('../icons/like-image.png'): require('../icons/nope-image.png')} />
        </div>
        <div className='profile-info'>
          <h3>{name}, {age}</h3>
          <h5>{bio}</h5>
        </div>
    </div>
    
  )
}
