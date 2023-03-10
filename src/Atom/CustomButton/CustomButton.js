import React from "react"

export default function CustomButton (props){
  return(
    <>
    <button onClick={props.onClick} className={props.className}>{props.txt}</button>
    </>
  )
}