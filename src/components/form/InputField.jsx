import React, { useState } from "react";
import {FormData} from './InputField.styles';

const InputField = () => {
  const [fullName, setFullName] = useState({
    fname:"",
    lname:""
  });
  const [updateData, setUpdateData] = useState("");
  const changeHandler = (e) => {
    console.log(e.target.value);
    const {name, value} = e.target;
    setFullName((preValue)=>{
         return{
          ...preValue,
        [name] : value,
         }
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUpdateData({
      fname: fullName.fname,
      lname: fullName.lname,
    })
    setFullName({fname:"", lname:""});
  };
  return (
    <>
     
     <form onSubmit={submitHandler}>
        <h1>Hello! {updateData.fname} {updateData.lname}</h1>
        <input type="text"
         placeholder="Enter First Name" 
         value={fullName.fname}
         name="fname"
         onChange={changeHandler} />

         <input type="text"
         placeholder="Enter Last Name" 
         name="lname"
         value={fullName.lname}
         onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>
     
    </>
  );
};

export default InputField;
