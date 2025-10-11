import { createSlice } from "@reduxjs/toolkit";
import { getList } from "@/services/product/productService";
const initialState = {
  list: [],
  loading: false,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;  
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(getList.pending, () => {
      // dispatch(showLoading());
    })
    .addCase(getList.fulfilled, (state, action) => {
        state.list = action.payload;
        // dispatch(hideLoading());
    })
    .addCase(getList.rejected, (state) => {
        state.loading = false;
        // dispatch(hideLoading());

    });
  }

});
export const {reducerPath} = productSlice;
export const selectProductList = (state) => state[reducerPath].list;
export default productSlice;