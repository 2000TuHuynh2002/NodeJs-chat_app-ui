import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slides/authSlice";
import conversationReducer from "@/store/slides/conversationSlice";

const store =  configureStore({
  reducer: {
    auth: authReducer,
    conversation: conversationReducer
  },
});

export default store;