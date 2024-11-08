import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../UserService/UserService";



const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  // const [error,setError] = useState('')

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const userData = await UserService.login(email,password)
      console.log(userData);
    }catch{
      console.log("Error getting userData")
    }
  }

  return (
    <div className="w-full h-screen bg-teal-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border-[2px] border-green-300 xl:w-1/2 h-3/5 lg:w-1/2 md:w-1/2 sm:1/2  flex items-center justify-center flex-col text-black gap-5"
      >
        <h1 className="py-3 xl:text-2xl md:text-xl sm:text-lg">Welcome Back,Please Login</h1>
        <label className="text-xl">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-4/5 h-12"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label className="text-xl">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-4/5 h-12"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="w-4/5 h-11 border-2px border-pink-400 bg-pink-400">
          Log in
        </button>
        <Link to="/Register"><button className="xl:text-2xl lg:text-lg md:text-md sm:text-sm">
          Dont have an Account? Register
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
