import React from 'react';
import Header from './components/Header';

import Liked from './pages/Liked';
import SwipePage from './pages/SwipePage';
import Error from './pages/Error';

import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import { useDispatch } from 'react-redux';
import { getLoginStatus } from './services/authServices';
import { SET_LOGIN } from './redux/authSlice';

axios.defaults.withCredentials = true;

function App() {

  const [dogData, setDogData] = React.useState([]);

  const [displayIcon, setDisplayIcon] = React.useState(false)

  const [renderIcon, setRenderIcon] = React.useState(false)

  const [dogIndex, setDogIndex] = React.useState(0);

  const [isLoading, setIsLoading] = React.useState(true)

  const dispatch = useDispatch();
  React.useEffect(()=> {
    async function loginStatus() {
      const status = await getLoginStatus()
      dispatch(SET_LOGIN(status))
    }
    loginStatus()
  }, [dispatch])

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
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/swipe" element={isLoading === false && dogIndex < dogData.length ? <SwipePage dogData={dogData} dogIndex={dogIndex} likeButton={likeButton} nopeButton={nopeButton} displayIcon={displayIcon} renderIcon={renderIcon}/> : <Error />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/liked" element={<Liked data={dogData}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
