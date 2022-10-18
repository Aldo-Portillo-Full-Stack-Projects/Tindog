import React from 'react';
import Header from './components/Header';

import Liked from './pages/Liked';
import SwipePage from './pages/SwipePage';
import Error from './pages/Error';

import {Routes, Route} from 'react-router-dom'

import dogs from './data/data'

function App() {

  const [dogData, setDogData] = React.useState(dogs);

  const [displayIcon, setDisplayIcon] = React.useState(false)

  const [renderIcon, setRenderIcon] = React.useState(false)

  const [dogIndex, setDogIndex] = React.useState(0);

  const [endList, setEndList] = React.useState(false)
    //console.table(dogData)



  function likeButton (id) {
    setDisplayIcon(true)
    setRenderIcon(true)

    setTimeout(() => {
      setDogIndex(prevIndex => prevIndex + 1) 
      setRenderIcon(false)
    }, 500)

    const updatedDogData = dogData.map(dog => {
      if(dog.id === id){
        return {
          ...dog,
          hasBeenSwiped: true,
          hasBeenLiked: true,
        }
      }
      return dog
    }
    )

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
      if(dog.id === id){
        return {
          ...dog,
          hasBeenSwiped: true,
        }
      }
      return dog
    }
    )

    setDogData(updatedDogData)

  }

  React.useEffect(()=> {
    const isListDone = dogData.every(function(dog){
      return dog.hasBeenSwiped === true
    })
    console.log(isListDone)
    setEndList(isListDone)
  }, [dogData])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/Tindog" element={endList === false ? <SwipePage img={dogData[dogIndex].avatar} name={dogData[dogIndex].name} age={dogData[dogIndex].age} bio={dogData[dogIndex].bio} id={dogData[dogIndex].id} likeButton={likeButton} nopeButton={nopeButton} displayIcon={displayIcon} renderIcon={renderIcon}/> : <Error />} />
        <Route path="/liked" element={<Liked data={dogData}/>} />
      </Routes>
    </div>
  );
}

export default App;
