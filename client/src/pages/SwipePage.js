import React from 'react'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

export default function SwipePage({img, name, age, bio, id, decisionButton, displayIcon, likeButton, nopeButton , renderIcon}) {
  return (
    <div className='swipe-page'>
        <Profile img={img} name={name} age={age} bio={bio} displayIcon={displayIcon} renderIcon={renderIcon}/>
        <Footer id={id} likeButton={likeButton} nopeButton={nopeButton}/>
    </div>
    
  )
}

