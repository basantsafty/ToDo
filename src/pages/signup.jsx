import React from 'react'
import { useFormik } from "formik";
import Btn from '../btn.jsx'
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../myContext/context";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const { toggleAuth } = useContext(AuthContext);
    const schema=Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(6, "Min 6 chars").required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        phone: Yup.string().matches(/^\d{10}$/, "Must be 10 digits").required(),
        confirm: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required()

    });

  const { values, handleChange, handleSubmit,errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      confirm: ""
    },
    validationSchema: schema,

    onSubmit: (values) => { //add redirect here
        console.log(values);    
        toggleAuth();
        navigate('/home');

    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-100 p-6">
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col w-full max-w-md bg-amber-100 shadow-amber-400 shadow-2xl rounded-md p-6 gap-y-4"
      
      >
        {/* First Name */}
        <div className="flex flex-row items-center gap-x-4">
          <label htmlFor="firstName" className="font-bold text-lg text-amber-950 w-40">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
            className="flex-1 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm p-2"
          />
        </div>
            { errors.firstName &&       
            <p className='text-red-600 '>{errors.firstName}</p>
            }

        {/* Last Name */}
        <div className="flex flex-row items-center gap-x-4">
          <label htmlFor="lastName" className="font-bold text-lg text-amber-950 w-40">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
            className="flex-1 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm p-2"
          />
        </div>
          { errors.lastName && 
            <p className='text-red-600 '>{errors.lastName}</p> 
            }

        {/* Email */}
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
            { errors.email && 
            <p className='text-red-600 '>{errors.email}</p> 
            }

        {/* Password */}
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
        </div>
            { errors.password &&    
            <p className='text-red-600 '>{errors.password}</p>
            }

        {/* Confirm Password */}
        <div className="flex flex-row items-center gap-x-4">
          <label htmlFor="confirm" className="font-bold text-lg text-amber-950 w-40">
            Confirm:
          </label>
          <input
            type="password"
            name="confirm"
            onChange={handleChange}
            value={values.confirm}
            className="flex-1 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm p-2"
          />
        </div>
            { errors.confirm &&    
            <p className='text-red-600 '>{errors.confirm}</p>
            }

        {/* Phone */}
        <div className="flex flex-row items-center gap-x-4">
          <label htmlFor="phone" className="font-bold text-lg text-amber-950 w-40">
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={values.phone}
            className="flex-1 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-sm p-2"
          />
        </div>
            { errors.phone &&    
            <p className='text-red-600 '>{errors.phone}</p>
            }

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <Btn message="Sign up" fuctionality={handleSubmit} />
        </div>
      </form>
    </div>
  )
}

export default Signup
