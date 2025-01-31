import { createSlice } from "@reduxjs/toolkit";

import { isCookieExist } from "@/utils/cookie.utils";

const init_user = JSON.parse(sessionStorage.getItem("user") as string);
const init_accessToken = sessionStorage.getItem("accessToken") as string;

const initialState = {
  user: init_user || {},
  accessToken: JSON.parse(init_accessToken) || {},
  isAuthenticated: isCookieExist("isLoggedIn"),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    SET_TOKENS: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.isAuthenticated = true;
      sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    LOGOUT: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      sessionStorage.clear();
    },
  },
});

export const { SET_TOKENS, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
