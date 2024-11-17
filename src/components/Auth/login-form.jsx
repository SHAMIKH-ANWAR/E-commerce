// import Link from "next/link"

import { Button } from "@/components/ui/Auth-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Auth-ui/card";
import { Input } from "@/components/ui/Auth-ui/input";
import { Label } from "@/components/ui/Auth-ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../UserService/UserService";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <form onSubmit={handleSubmit}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/Register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
    </div>
  );
}
