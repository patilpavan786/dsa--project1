import React from "react"

export default function CustomInput (props){
  return(
    <>
    <input
     type={props.type}
    onChange={props.onChange}
    placeholder={props.placeholder}
    value={props.value}
    className={props.className}
    />
    </>
  )
}