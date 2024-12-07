import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/lib/redux/auth/authSlice";
import userReducer from "@/lib/redux/user/userSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
