import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  friend_id: "",
  friend_username: "",
  friend_fullName: "",
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState: initialState,
  reducers: {
    currentConversation: (state, action) => {
      const { conversation_id, friend_id, friend_fullName, friend_username } = action.payload;
      state.id = conversation_id;
      state.friend_id = friend_id;
      state.friend_username = friend_username;
      state.friend_fullName = friend_fullName;
    },
  },
});

export const { currentConversation } = conversationSlice.actions;
export default conversationSlice.reducer;
