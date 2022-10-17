import React from 'react'

export default function Profile({img, name, age, bio}) {
  return (
    <div className='profile-container' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat'}}>
        {/* <img src={img} alt="" /> */}
        <div className='liked-box'>
          <h1>LIKED</h1>
        </div>
        <div className='profile-info'>
          <h3>{name}, {age}</h3>
          <h5>{bio}</h5>
        </div>
    </div>
    
  )
}
