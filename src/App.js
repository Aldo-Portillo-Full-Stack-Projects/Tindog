import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';

import dogs from './data/data'

function App() {

  const [dogIndex, setDogIndex] = React.useState(0)

  function likeProfile () {
    setDogIndex(prevIndex => prevIndex + 1)
  }
  function skipProfile () {
    setDogIndex(prevIndex => prevIndex + 1)
  }
  return (
    <div className="App">
      <Header />
      <Profile img={dogs[dogIndex].avatar} name={dogs[dogIndex].name} age={dogs[dogIndex].age} bio={dogs[dogIndex].bio}/>
      <Footer likeProfile={likeProfile} skipProfile={skipProfile}/>
    </div>
  );
}

export default App;
