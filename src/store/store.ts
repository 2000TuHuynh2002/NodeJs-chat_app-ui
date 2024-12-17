import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slides/authSlice";
import conversationReducer from "@/store/slides/conversationSlice";
import messageReducer from "@/store/slides/messageSlice";

const store =  configureStore({
  reducer: {
    auth: authReducer,
    conversation: conversationReducer,
    message: messageReducer,
  },
});

export default store;