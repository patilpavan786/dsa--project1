import React from "react"

export default function CustomButton (props){
  return(
    <>
    <button onClick={props.onClick}>{props.txt}</button>
    </>
  )
}