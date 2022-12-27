import React from 'react';
import Header from './components/Header';

import Liked from './pages/Liked';
import SwipePage from './pages/SwipePage';
import Error from './pages/Error';

import {Routes, Route} from 'react-router-dom'
import axios from 'axios';

function App() {

  const [dogData, setDogData] = React.useState([]);

  const [displayIcon, setDisplayIcon] = React.useState(false)

  const [renderIcon, setRenderIcon] = React.useState(false)

  const [dogIndex, setDogIndex] = React.useState(0);

  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    axios.get('http://localhost:5000/api/dogs')
      .then(res => {
        const dogs = res.data;
        setDogData(dogs)
        setIsLoading(false)
      })
  }, [])

  function likeButton (id) {
    setDisplayIcon(true)
    setRenderIcon(true)
    setTimeout(() => {
      setDogIndex(prevIndex => prevIndex + 1) 
      setRenderIcon(false)
    }, 500)
    const updatedDogData = dogData.map(dog => {
      if(dog._id === id){
        return {
          ...dog,
          hasBeenSwiped: true,
          hasBeenLiked: true,
        }
      }
      return dog
    })
    setDogData(updatedDogData)
  }

  function nopeButton (id) {
    setDisplayIcon(false)
    setRenderIcon(true)
    setTimeout(() => {
      setDogIndex(prevIndex => prevIndex + 1) 
      setRenderIcon(false)
    }, 500)
    const updatedDogData = dogData.map(dog => {
      if(dog._id === id){
        return {
          ...dog,
          hasBeenSwiped: true,
        }
      }
      return dog
    })
    setDogData(updatedDogData)
  }



  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={isLoading === false && dogIndex < dogData.length ? <SwipePage dogData={dogData} dogIndex={dogIndex} likeButton={likeButton} nopeButton={nopeButton} displayIcon={displayIcon} renderIcon={renderIcon}/> : <Error />} />
        <Route path="/liked" element={<Liked data={dogData}/>} />
      </Routes>
    </div>
  );
}

export default App;
