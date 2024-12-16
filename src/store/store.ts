import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/auth/authSlice";
import conversationReducer from "@/store/conversation/conversationSlice";

const store =  configureStore({
  reducer: {
    auth: authReducer,
    conversation: conversationReducer
  },
});

export default store;