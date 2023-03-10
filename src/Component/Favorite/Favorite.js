import React, { useState ,useEffect} from "react";
import Navbar from "../../Atom/Navbar/Navbar";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import style from "./Favorite.module.css";


export default function Favorite() {
  const previousContacts = JSON.parse(localStorage.getItem('favoritePackage')) || [];
const[show,setShow]=useState(false)
console.log(previousContacts)

useEffect(()=>{
if(previousContacts.length>0){
  setShow(true)
}
},[previousContacts])



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
 
 <div className={style.cardmain}>
 <div className={style.card}>
  <p>{x.value1}</p>
  <p>{x.value2}</p>
  <CustomButton txt='Edit'  className={style.btn}/>
  <CustomButton txt='Delete'  className={style.btn}/>
  </div>
  </div>
)})}


    </div>
    
    
    
    
    </> : <div className={style.mainbox}>
        <div className={style.box}>
          <h3>You dont have any Fav yet , Please Add</h3>
          <CustomButton
            txt="Add fav"
            onClick={()=> navigate("/")}
            className={style.btn}
          />
        </div>
      </div>}
    </div>
  );
}
