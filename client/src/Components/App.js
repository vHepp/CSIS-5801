import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from "./NavigationBar";
import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";
import Classes from "./Classes";
import GroupEvents from "./GroupEvents"; 

function app() {
return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path = '/Homepage' element = {<Homepage />} />
        <Route path = '/Register' element = {< Register/>} />
        <Route path = '/Login' element = {< Login/>} />
        <Route path = '/Classes' element = {< Classes/>} />
        <Route path = '/GroupEvents' element = {< Group Events/>} />

    </Routes>
    </BrowserRouter>
);


}


export default app;