import React,{useState} from "react"
import Navbar from "../../Atom/Navbar/Navbar";

export default function Favorite (){
  const previousContacts = JSON.parse(localStorage.getItem('favoritePackage')) || [];


  return(
    <div>
      <Navbar />
      <h1>Welcome to Favorite NPM packages</h1>
   
    </div>
  )
}