import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

// "name/toggleAuth" : action type
const authSlice = createSlice({
  name: "auth",
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
