import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="w-full h-screen bg-green-600 flex items-center justify-center">
        <form action="" className='border-[2px] border-purple-300 w-2/5 h-4/5 flex items-center justify-center flex-col text-white gap-5'>
            <h1 className='py-3 text-2xl'>Hello 👋, Register to get Strated</h1>
            <label className='text-xl'>Username</label>
            <input type="text" placeholder='Enter your Username' className='w-4/5 h-12'/>
        <label className='text-xl'>Email</label>
            <input type="email" placeholder='Enter your email' className='w-4/5 h-12'/>
            <label className='text-xl'>Password</label>
            <input type="password" placeholder='Enter your password' className='w-4/5 h-12' />
            <button className="w-4/5 h-11 border-2px bg-pink-800">Register</button>
            <button>Already Have an Account? <Link to="/Login">Login</Link></button>
        </form>
    </div>
  )
}

export default Register