import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";

export const getList = createAsyncThunk("product/gettList", async () => {
  const response = await http.get("/posts");
  return response;
});

