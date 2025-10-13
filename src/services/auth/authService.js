import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";

export const getCurentUser = createAsyncThunk(
  "auth/getCurentUser",
  async () => {}
);

export const register = async (data) =>{
    const response  =await http.post("/auth/register", data);
    return response.data;
}

export const login = async (data) =>{
    const response  =await http.post("/auth/login", data);
    return response.data;
}
