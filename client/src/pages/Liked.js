import axios from 'axios';
import React from 'react'
import FavoritedDog from '../components/FavoritedDog'
import { BACKEND_URL } from '../services/authServices'

export default function Liked({data}) {

    const [likedDogs, setLikedDogs] = React.useState([])

    React.useEffect(() => {
      const getLikedDogs = async () => {
        try{    
            const response = await axios.get(`${BACKEND_URL}/api/user/getuser`);
            setLikedDogs(response.data.likedDogs)
            return response.data.likedDogs
        } catch(err){
            const message = (err.response && err.response.data && err.response.data.message)|| err.message || err.toString();
            console.log(message)
            
        }
      }

      getLikedDogs()
    }, [])

    console.log(likedDogs)

    const renderLikedDogs = likedDogs.map(dog => {
      return <FavoritedDog name={dog.name} avatar={dog.avatar}/>
    })
    
  return (
    <div className='liked-dogs'>
      {renderLikedDogs}
      </div>

  )
}
