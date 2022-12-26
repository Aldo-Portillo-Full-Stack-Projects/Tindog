import React from 'react'
import FavoritedDog from '../components/FavoritedDog'

export default function liked({data}) {

    const filterFavorites = data.filter(dog => dog.hasBeenLiked === true)

    const renderFavorites = filterFavorites.map(dog => <FavoritedDog name={dog.name} avatar={dog.avatar}/>)

    console.log(filterFavorites)
  return (
    <div className='liked-dogs'>{renderFavorites}</div>

  )
}
