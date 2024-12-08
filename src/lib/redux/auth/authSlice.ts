import { createSlice } from "@reduxjs/toolkit";

import { isCookieExist } from "@/utils/cookie.utils";
import { apiRefresh } from "@/utils/axios.utils";

if (isCookieExist("isLoggedIn") && !sessionStorage.getItem("accessToken")) {
  const [_, response] = await apiRefresh();
  try {
    const { accessToken, user } = response;
    sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
    sessionStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error("Failed to get access token:", error);
  }
}

const init_user = sessionStorage.getItem("user") as string;
const init_accessToken = sessionStorage.getItem("accessToken") as string;

const initialState = {
  user: JSON.parse(init_user) || {},
  accessToken: JSON.parse(init_accessToken) || {},
  isAuthenticated: isCookieExist("isLoggedIn"),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setTokens: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.isAuthenticated = true;
      sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("user");
    },
  },
});

export const { setTokens, logout } = authSlice.actions;
export default authSlice.reducer;
