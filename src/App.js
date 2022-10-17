import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';

import dogs from './data/data'

function App() {

  const [dogIndex, setDogIndex] = React.useState(2)
  return (
    <div className="App">
      <Header />
      <Profile img={dogs[dogIndex].avatar} name={dogs[dogIndex].name} age={dogs[dogIndex].age} bio={dogs[dogIndex].bio}/>
      <Footer />
    </div>
  );
}

export default App;
