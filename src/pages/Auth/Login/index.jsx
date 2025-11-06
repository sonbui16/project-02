import { useForm } from "react-hook-form";
import React from "react";
import { useNavigate } from "react-router";

import * as authService from "@/services/auth/authService";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "son.nguyen6@  .com",
      password: "12345678",
    },
  });
  const onSubmit = async (data) => {
    const access_token = await authService.login(data);
    try {
      localStorage.setItem("access_token", access_token);
      navigate("/");
    } catch (error) {
      console.error("Failed to save access token", error);
    }
  };
  return (
    // <div>
    //   <h1 className="">Login</h1>
    //   <form onSubmit={handleSubmit(onSubmit)}>

    //     <div className="">
    //       <label>Email</label>
    //       <input
    //         type="email"
    //         placeholder="Nhập email "
    //         {...register("email", { required: true })}
    //         autoComplete="off"
    //       />
    //     </div>

    //     <div className="">
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         placeholder="Nhập PASS "
    //         {...register("password", { required: true })}
    //         autoComplete="new-password"
    //       />
    //     </div>

    //     <button className="">Đăng nhập</button>
    //   </form>
    // </div>
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Login;
