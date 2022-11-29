import { useReducer, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//Components
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ProfilePage from "./Components/ProfilePage";
import PageHeader from "./Components/PageHeader";
import PageFooter from "./Components/PageFooter";

//Reducers
import { reducer, initialState } from "./reducers/userReducer";

//Contexts
import { userContext } from "./contexts/userContext";
import { roomContext } from "./contexts/roomContext";
import InviteTest from "./Components/InviteTest";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <>
      <BrowserRouter>
        <userContext.Provider value={value}>
          <PageHeader />
          <NavBar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* to be implemented  */}
            {/* <Route path=' /profile' element={<Profile />} /> */}
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
      <PageFooter>

        
      </PageFooter>
    </>
  );
};

export default App;