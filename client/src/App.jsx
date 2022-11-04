import { useReducer, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

//Components
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

//Reducers
import { reducer, initialState } from './reducers/userReducer';

//Contexts
import { userContext } from './contexts/userContext'
import { roomContext } from './contexts/roomContext'


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
    
  return (
    <BrowserRouter>
    
      <userContext.Provider value={value}>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />


          {/* to be implemented  */}
          {/* <Route path='/profile' element={<Profile />} /> */}
        </Routes>
      </userContext.Provider >
      
    </BrowserRouter>
  );
}

export default App;
