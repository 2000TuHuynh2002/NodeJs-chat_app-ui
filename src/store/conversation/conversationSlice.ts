import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  friend: "",
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState: initialState,
  reducers: {
    currentConversation: (state, action) => {
      const { conversation_id, friend } = action.payload;
      state.id = conversation_id;
      state.friend = friend;
    },
  },
});

export const { currentConversation } = conversationSlice.actions;
export default conversationSlice.reducer;
