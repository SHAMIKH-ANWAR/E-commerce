import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from "../UserService/UserService";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '', // role will be set based on the checkbox
    city: ''
  });

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle role change (checkbox)
  const handleRoleChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, role: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found! Please log in first.');
        return;
      }
      
      // Call the UserService to register the user with the selected role
      const response = await UserService.register(formData, token);

      // Clear the form fields after successful registration
      setFormData({
        name: '',
        email: '',
        password: '',
        role: '', // Clear the role
        city: ''
      });

      alert('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred while registering user');
    }
  };

  return (
    <div className="w-full h-screen bg-green-600 flex items-center justify-center">
      <form onSubmit={handleSubmit} className='border-[2px] border-purple-300 w-2/5 h-4/5 flex items-center justify-center flex-col text-white gap-5'>
        <h1 className='py-3 text-2xl'>Hello 👋, Register to get Started</h1>
        
        <label className='text-xl'>Username</label>
        <input 
          type="text" 
          placeholder='Enter your Username' 
          className='w-4/5 h-12' 
          name="name" 
          value={formData.name}
          onChange={handleInputChange} 
        />
        
        <label className='text-xl'>Email</label>
        <input 
          type="email" 
          placeholder='Enter your email' 
          className='w-4/5 h-12' 
          name="email"
          value={formData.email}
          onChange={handleInputChange} 
        />

        <label className='text-xl'>Password</label>
        <input 
          type="password" 
          placeholder='Enter your password' 
          className='w-4/5 h-12' 
          name="password"
          value={formData.password}
          onChange={handleInputChange} 
        />
        
        {/* Role Selection: Normal User or Store Owner */}
        <div className="flex items-center gap-5">
          <div>
            <input 
              type="radio" 
              id="user" 
              name="role" 
              value="USER" 
              onChange={handleRoleChange} 
              checked={formData.role === "USER"}
            />
            <label htmlFor="user" className="text-xl">Normal User</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="storeOwner" 
              name="role" 
              value="ADMIN" 
              onChange={handleRoleChange} 
              checked={formData.role === "ADMIN"}
            />
            <label htmlFor="storeOwner" className="text-xl">Store Owner</label>
          </div>
        </div>

        {/* Register Button */}
        <button type="submit" className="w-4/5 h-11 border-2px bg-pink-800">Register</button>

        {/* Login Redirect Button */}
        <button className="mt-5">Already Have an Account? <Link to="/Login">Login</Link></button>
      </form>
    </div>
  );
}

export default Register;
