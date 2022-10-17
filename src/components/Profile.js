import React from 'react'

export default function Profile({img, name, age, bio}) {
  return (
    <div className='profile-container'>
        <img src={img} alt="" />
        <h3>{name}, {age}</h3>
        <h5>{bio}</h5>
    </div>
    
  )
}
