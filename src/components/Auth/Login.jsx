import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../UserService/UserService";
import { Label } from "../ui/Auth-ui/label";
import { Input } from "../ui/Auth-ui/input";
import { Button } from "../ui/Auth-ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Auth-ui/card";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userData = await UserService.login(email, password);
      console.log("Login successful", userData);
      nav("/");
    } catch (error) {
      console.error("Error logging in:", error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-none shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-white">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 text-white placeholder-white/50 border-white/30 focus:border-white"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
              Log in
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/Register">
              <Button variant="link" className="text-white hover:text-teal-200">
                Don't have an account? Register
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;