import React from 'react'
import Profile from '../components/Profile'
import Buttons from '../components/Buttons'

export default function SwipePage({dogData, dogIndex, displayIcon, likeButton, nopeButton , renderIcon}) {

  const { name, age, bio, avatar, _id} = dogData[dogIndex]
  
  return (
    <div className='swipe-page'>
        <Profile img={avatar} name={name} age={age} bio={bio} displayIcon={displayIcon} renderIcon={renderIcon}/>
        <Buttons id={_id} likeButton={likeButton} nopeButton={nopeButton}/>
    </div>
    
  )
}