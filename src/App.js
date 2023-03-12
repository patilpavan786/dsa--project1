import React from 'react';
 import Home from "./Component/Home/Home"
import Favorite from "./Component/Favorite/Favorite"
import {BrowserRouter,Routes,Route} from "react-router-dom"
export default function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Favorite" element={<Favorite/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}
