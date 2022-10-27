import './App.css';
import { useReducer, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './Components/NavBar';
import { userContext } from './userContext'
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { reducer, initialState } from './reducers/userReducer';
const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <BrowserRouter>
          <userContext.Provider value={value}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        {/* to be implemented  */}
        <Route path='/register' element={<SignUp />} />
        {/* <Route path='/profile' element={<Profile />} /> */}
      </Routes>
          </userContext.Provider >
    </BrowserRouter>
  );
}

export default App;
