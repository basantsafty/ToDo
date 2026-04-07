import React from 'react'
import { useFormik } from "formik";
import Btn from '../btn.jsx'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../myContext/context";
function Login() {
  const [signed , setSigned]=useState(false);
  const { toggleAuth } = useContext(AuthContext);

    const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values);
        // Navigate to the home page after successful login
        if(values.email === "basantsafty@gmail.com" && values.password === "123456789")
        {
            toggleAuth();
            navigate('/home');  
        }
          else {
           setSigned(signed => !signed);
            
    }}}) ;
  function toSignup(){
    navigate("/signup")
  }
  ;

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-100 p-6">
    <form
          onSubmit={handleSubmit} 
        className="flex flex-col w-full max-w-md bg-amber-100 shadow-amber-400 shadow-2xl rounded-md p-6 gap-y-4"
     >

      <p className='text-4xl text-amber-950 text-center text-shadow-sm text-shadow-amber-300 font-extrabold'>Log In</p>
        <div className="flex flex-row items-center gap-x-4">
          <label htmlFor="email" className="font-bold text-lg text-amber-950 w-40">
            Email:
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            className="flex-1 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm p-2"
          />
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <label htmlFor="password" className="font-bold text-lg text-amber-950 w-40">
            Password:
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="flex-1 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm p-2"
          />
        </div >
          {
            signed && 
            <div className="flex flex-row items-center gap-x-4 self-center">
            <p className='text-amber-700 '> Wrong email or password</p>
            <Link to="/signUp" className='text-amber-950 underline underline-offset-1'> Creat new acount</Link>
            </div>
          }
        <div className="flex flex-row items-center gap-x-4 self-center">
          <Btn message="Login" fuctionality={handleSubmit} />
          <span className='text-amber-950'> or </span>
          <Btn message="Sign Up" fuctionality={toSignup}/>

        </div>
    </form>
    </div>
  )
}

export default Login
