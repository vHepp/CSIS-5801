import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './Components/NavBar';
import Pageheader from './Components/Pageheader';
import Home from './Components/Home';
import Login from './Components/Login';

const App = () => {

  return (
    <BrowserRouter>
    <Pageheader />
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        {/* to be implemented  */}
        {/* <Route path='/register' element={<Register />} /> */}
        {/* <Route path='/profile' element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
