import { useForm } from "react-hook-form";
import React from "react";

import * as authService from "@/services/auth/authService";
import { useNavigate } from "react-router";
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
    <div>
      <h1 className="">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       


        <div className="">
          <label>Email</label>
          <input
            type="email"
            placeholder="Nhập email "
            {...register("email", { required: true })}
            autoComplete="off"
          />
        </div>

        <div className="">
          <label>Password</label>
          <input
            type="password"
            placeholder="Nhập PASS "
            {...register("password", { required: true })}
            autoComplete="new-password"
          />
        </div>


        <button className="">Đăng nhập</button>
      </form>
    </div>
  );
}
export default Login;
