import React, { useState, useEffect } from "react";
import Navbar from "../../Atom/Navbar/Navbar";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import style from "./Favorite.module.css";
import Swal from 'sweetalert2';
import swalWithBootstrapButtons from 'sweetalert2';
export default function Favorite() {
  const previousContacts =
    JSON.parse(localStorage.getItem("favoritePackage")) || [];

  const [show, setShow] = useState(false);
  const [allContacts, setAllContacts] = useState(previousContacts);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (previousContacts.length > 0) {
      setShow(true);
    }
  }, [previousContacts]);

  const handleDelete = (e) => {

    swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        const contacts = JSON.parse(localStorage.getItem("favoritePackage")) || [];
        const otherContacts = contacts.filter((contact) => contact.value1 !== e);
        localStorage.setItem("favoritePackage", JSON.stringify(otherContacts));
        setAllContacts(otherContacts);
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Don,t worry Your file is safe :)",
          "error"
        );
      }
    });
 
  };


  function HandleEdit(id) {
    const contacts = JSON.parse(localStorage.getItem("favoritePackage")) || [];
    contacts.forEach((item, i) => {
      if (i === id) {
        let editable = window.prompt(item.value2);
        item.value2 = editable;
      }
    });
    localStorage.setItem("favoritePackage", JSON.stringify(contacts));
    setAllContacts([...contacts]);
  }

 


  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.title}>
        <h1>Welcome to Favorite NPM packages</h1>
        {show ? (
          <>
            <CustomButton
              txt="Add fav"
              onClick={() => navigate("/")}
              className={style.btn}
            />
          </>
        ) : null}
      </div>

      {show ? (
        <>
          <div>
            {allContacts.map((x, i) => {
              return (
                <div className={style.cardmain}>
                  <div className={style.card}>
                    <div className={style.txtmain}>

                    <p>{x.value1}</p>
                    </div>
                    
                 <div className={style.btnmain}>
                    <CustomButton
                      txt="Edit"
                      onClick={() => HandleEdit(i)}
                      className={style.btn1}
                    />
                    <CustomButton
                      txt="Delete"
                      onClick={() => handleDelete(x.value1)}
                      className={style.btn1}
                    />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className={style.mainbox}>
          <div className={style.box}>
            <h3>You dont have any Fav yet , Please Add</h3>
            <CustomButton
              txt="Add fav"
              onClick={() => navigate("/")}
              className={style.btn}
            />
          </div>
        </div>
      )}
    </div>
  );
}
