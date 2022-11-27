import React from 'react'

export default function FavoritedDog({name, avatar}) {
  return (

    <div className='favorite-dog-card'>
        <img src={avatar} alt=""/>
        {name}
    </div>
  )
}
