import { useForm } from "react-hook-form";
import React from "react";

import * as authService from "@/services/auth/authService";
import { useNavigate } from "react-router";
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Son",
      lastName: "Nguyen",
      email: "son.nguyen@example.com",
      password: "12345678",
      password_confirmation: "12345678",
    },
  });
  const onSubmit = async (data) => {
    const access_token = await authService.register(data);
    try {
      localStorage.setItem("access_token", access_token);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Nhập họ"
            {...register("firstName", { required: "Vui lòng nhập trường này" })}
          />
          {errors.firstName && <p className="">{errors.firstName.message}</p>}
        </div>

        <div className="">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Nhập tên "
            {...register("lastName", { required: true })}
          />
        </div>

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

        <div className="">
          <label>Nhập lại PASS</label>
          <input
            type="password"
            placeholder="Nhập lại PASS "
            {...register("password_confirmation", { required: true })}
            autoComplete="password_confirmation"
          />
        </div>

        <button className="">DDawng kys</button>
      </form>
    </div>
  );
}
export default Register;
