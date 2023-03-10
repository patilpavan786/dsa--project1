import React, { useState } from "react";
import Navbar from "../../Atom/Navbar/Navbar";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import style from "./Favorite.module.css";


export default function Favorite() {
  const previousContacts = JSON.parse(localStorage.getItem('favoritePackage')) || [];
const[show,setShow]=useState(true)
console.log(previousContacts)

  function handleAddFav() {}
  const navigate= useNavigate()
  return (
    <div >
      <Navbar />
      <div className={style.title}>
        <h1>Welcome to Favorite NPM packages</h1>
    { show? <> <CustomButton 
         txt="Add fav"
         onClick={()=> navigate("/")}
         className={style.btn}
        
        /></> : null  }
      </div>

    { show? <>
    
    <div>
{previousContacts.map((x)=>{return(
 
 <div>
 <div      className={style.card}>
  <p>{x.value1}</p>
  <p>{x.value2}</p>
  </div>

)})}


    </div>
    
    
    
    
    </> : <div className={style.mainbox}>
        <div className={style.box}>
          <h3>You dont have any Fav yet , Please Add</h3>
          <CustomButton
            txt="Add fav"
            onClick={handleAddFav}
            className={style.btn}
          />
        </div>
      </div>}
    </div>
  );
}
