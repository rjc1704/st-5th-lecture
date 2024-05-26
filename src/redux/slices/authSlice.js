import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleAuth: (state) => {
      console.log("toogleAuth 실행");
      state.isLogin = !state.isLogin;
    },
  },
});

export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;
