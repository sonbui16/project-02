import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true    
}
const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        showLoading: (state) => {
            state.loading = true;
        },
        hideLoading: (state) => {
            state.loading = false;
        }
    }
});

export const {showLoading, hideLoading } = loadingSlice.actions;
export const {reducerPath} = loadingSlice;

export const loadingSelector = (state) => {console.log("1" , state);
};

export default loadingSlice;
