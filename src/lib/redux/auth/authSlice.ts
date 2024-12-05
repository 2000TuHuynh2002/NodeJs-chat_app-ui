import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "@/utils/cookie.utils";

const initialState = {
  user: null,
  accessToken: localStorage.getItem("accessToken"),
  isAuthenticated: getCookie("isLoggedIn") || false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action) => {
      const { accessToken } = action.payload.accessToken;
      state.accessToken = accessToken;
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", accessToken);
    },
    logout: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setTokens, logout } = authSlice.actions;
export default authSlice.reducer;
