import React from 'react';

import Liked from './pages/Liked';
import SwipePage from './pages/SwipePage';
import Error from './pages/Error';

import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import { useDispatch } from 'react-redux';
import { addDogtoLiked, BACKEND_URL, getLoginStatus } from './services/authServices';
import { SET_LOGIN } from './redux/authSlice';
import PageContainer from './components/PageContainer';

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
    axios.get(`${BACKEND_URL}/api/dogs/getDogs`)
      .then(res => {
        const dogs = res.data;
        setDogData(dogs)
        setIsLoading(false)
      })
  }, [])

  async function likeButton (id) {
    setDisplayIcon(true)
    setRenderIcon(true)
    await addDogtoLiked(dogData[dogIndex])
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
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/swipe" element={isLoading === false && dogIndex < dogData.length ?  <PageContainer children={<SwipePage dogData={dogData} dogIndex={dogIndex} likeButton={likeButton} nopeButton={nopeButton} displayIcon={displayIcon} renderIcon={renderIcon}/>} />: <PageContainer children={<Error />} />} />
        <Route path="/profile" element={<PageContainer children={<UserProfile />} />} />
        <Route path="/liked" element={<PageContainer children={<Liked data={dogData}/>}/>} />
      </Routes>
    </div>
  );
}

export default App;


