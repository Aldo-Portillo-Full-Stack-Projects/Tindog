import React from 'react'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

export default function SwipePage({img, name, age, bio, id, decisionButton}) {
  return (
    <div>
        <Profile img={img} name={name} age={age} bio={bio}/>
        <Footer id={id} decisionButton={decisionButton}/>
    </div>
    
  )
}

