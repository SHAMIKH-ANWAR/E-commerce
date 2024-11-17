import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from "../UserService/UserService";
import { Input } from '../ui/Auth-ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Auth-ui/card';
import { Label } from '../ui/Auth-ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/Auth-ui/radio-group';
import { Button } from '../ui/Auth-ui/button';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER',
    city: ''
  });
  const [error, setError] = useState('');
  const nav = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (value) => {
    setFormData({ ...formData, role: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await UserService.register(formData);
      console.log('User registered successfully', response);
      nav('/Login');
    } catch (error) {
      console.error('Error registering user:', error);
      setError('An error occurred while registering user');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-none shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Hello 👋, Register to get Started</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Username</Label>
              <Input
                id="name"
                type="text" 
                placeholder="Enter your Username" 
                className="bg-white/20 text-white placeholder-white/50 border-white/30 focus:border-white"
                name="name" 
                value={formData.name}
                onChange={handleInputChange} 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/20 text-white placeholder-white/50 border-white/30 focus:border-white"
                name="email"
                value={formData.email}
                onChange={handleInputChange} 
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password" 
                placeholder="Enter your password" 
                className="bg-white/20 text-white placeholder-white/50 border-white/30 focus:border-white"
                name="password"
                value={formData.password}
                onChange={handleInputChange} 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-white">Role</Label>
              <RadioGroup 
                defaultValue="USER" 
                onValueChange={handleRoleChange}
                className="flex flex-col sm:flex-row sm:gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="USER" id="user" />
                  <Label htmlFor="user" className="text-white">Normal User</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ADMIN" id="storeOwner" />
                  <Label htmlFor="storeOwner" className="text-white">Store Owner</Label>
                </div>
              </RadioGroup>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Register
            </Button>

            <div className="text-center">
              <Button variant="link" asChild className="text-white hover:text-purple-200">
                <Link to="/Login">Already Have an Account? Login</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;