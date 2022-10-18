import './App.css';
import React from 'react';
import Home from './Components/Home';
import Test from './Components/Test';


import Login from './Components/Login';
import Ethan from './Components/Ethan';

const App = () => {

  return (
    <div className="App">
      <Home />
      
      <Login/>
      
      <Ethan />

    </div>
  );
}

export default App;
