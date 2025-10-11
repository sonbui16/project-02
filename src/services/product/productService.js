import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";
import { showLoading, hideLoading } from "@/features/loading";

export const getList = createAsyncThunk(
  "product/gettList",
  async (_, thunkAPI) => {
    console.log("ooo", thunkAPI);
    const { dispatch } = thunkAPI;
    dispatch(showLoading());
    try {
      const response = await http.get("/posts");
      dispatch(hideLoading());
      return response;
    } catch (err) {
      dispatch(hideLoading());
      throw new Error(err.message);
    }
  }
);
