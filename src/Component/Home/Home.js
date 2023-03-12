import React, { useState, useEffect } from 'react';
import CustomInput from '../../Atom/CustomInput/CustomInput';
import CustomButton from '../../Atom/CustomButton/CustomButton';
import style from './Home.module.css';
import Navbar from '../../Atom/Navbar/Navbar';
import { useNavigate } from "react-router-dom";

export default function Home() {

  const [search, setSearch] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [package1, setPackage1] = useState([]);
  const navigate= useNavigate()
  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=reactjs")
    .then((res) => res.json())
    .then((data1) =>  setPackage1(data1.results));
  }, []);

  useEffect(() => {
    fetch(`https://api.npms.io/v2/search?q=${search}`)
    .then((res) => res.json())
    .then((data1) =>  setPackage1(data1.results));
  }, [search]);

  function handleClick(e) {
    setSearch(e.target.value);
  }

  function handleSubmit() {
    let data = {
      value1: value1,
      value2: value2,
    };
    if (!value1.length>0 && !value2.length>0)
    return

    const previousContacts = JSON.parse(localStorage.getItem('favoritePackage')) || [];
    let newContacts = [ ...previousContacts,data];
    localStorage.setItem('favoritePackage', JSON.stringify(newContacts));
setValue1("")
setValue2("")
navigate("/Favorite")
  }
  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.title}>

      <h1>Search:-</h1>
      <CustomInput
        type="text"
        placeholder="@search"
        onChange={handleClick}
        value={search}
        className={style.input1}
      />
      </div>
    <div className={style.cardcontainer}>


    { package1?.map((x, index) => {
          return (
            <div id={index} className={style.card}>
              <CustomInput
                type="radio"
                value={x.package.name}
                onChange={(e) => setValue1(e.target.value)}
                className={style.input2}
              />
              <p>{x.package.name}</p>
            </div>
          );
        })}
    </div>
    
      <CustomInput
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        className={style.input3}
      />
      <CustomButton txt="submit" onClick={handleSubmit} className={style.btn}/>
    </div>
  );
}
