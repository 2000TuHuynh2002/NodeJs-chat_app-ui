import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slides/authSlice";
import roomReducer from "@/store/slides/roomSlice";

const store =  configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
  },
});

export default store;