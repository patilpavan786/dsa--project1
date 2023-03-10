import React, { useState, useEffect } from 'react';
import CustomInput from '../../Atom/CustomInput/CustomInput';
import CustomButton from '../../Atom/CustomButton/CustomButton';
import style from './Home.module.css';
import Navbar from '../../Atom/Navbar/Navbar';

export default function Home() {
  const [search, setSearch] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [package1, setPackage1] = useState([]);
  async function callApi() {
    const response = await fetch('https://api.npms.io/v2/search?q=reactjs');
    const data = await response.json();
    const newData = data.results;
    setPackage1(newData);
  }

  useEffect(() => {
    callApi();
  }, []);

  function handleClick(e) {
    setSearch(e.target.value);
  }

  function handleSubmit() {
    let data = {
      value1: value1,
      value2: value2,
    };

    const previousContacts = JSON.parse(localStorage.getItem('favoritePackage')) || [];
    let newContacts = [ ...previousContacts,data];
    localStorage.setItem('favoritePackage', JSON.stringify(newContacts));

  }
  return (
    <div className={style.main}>
      <Navbar />
      Search:-
      <CustomInput
        type="text"
        placeholder="@search"
        onChange={handleClick}
        value={search}
        className={style.input1}
      />
      {package1
        .filter((x) =>
          x.package.name.toLowerCase().includes(search.toLowerCase())
        )
        .splice(0, 4)
        .map((x, index) => {
          return (
            <div id={index} className={style.card}>
              <CustomInput
                type="checkbox"
                value={x.package.name}
                onChange={(e) => setValue1(e.target.value)}
                className={style.input2}
              />
              <p>{x.package.name}</p>
            </div>
          );
        })}
      <CustomInput
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        className={style.input3}
      />
      <CustomButton txt="submit" onClick={handleSubmit} />
    </div>
  );
}
