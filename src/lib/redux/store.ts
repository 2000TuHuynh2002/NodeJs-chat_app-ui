import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/lib/redux/auth/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
