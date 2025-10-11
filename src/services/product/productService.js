import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "@/features/loading";

export const getList = createAsyncThunk("product/gettList", async () => {
  const dispatch = useDispatch();
  dispatch(showLoading());
  try {
    const response = await http.get("/posts");
    dispatch(hideLoading());
    return response;
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error.message);
  }
});
