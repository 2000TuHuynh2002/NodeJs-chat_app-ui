import { createSlice } from "@reduxjs/toolkit";

interface roomsMessages {
  [key: string]: Array<{
    senderId: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  }>;
}

const initialState = {
  rooms: [] as Array<object>,
  roomsMessages: {} as roomsMessages,
};

const roomSlice = createSlice({
  name: "conversation",
  initialState: initialState,
  reducers: {
    SET_ROOMS: (state, action) => {
      state.rooms = action.payload;
    },
    CLEAR_ROOMS: (state) => {
      state.rooms = [];
    },
    ADD_ROOM: (state, action) => {
      state.rooms.unshift(action.payload);
    },
    SET_MESSAGES_TO_ROOM: (state, action) => {
      const { roomId, messages } = action.payload;
      state.roomsMessages[roomId] = messages;
    },
    CLEAR_MESSAGES: (state) => {
      state.roomsMessages = {};
    },
    ADD_MESSAGE_TO_ROOM: (state, action) => {
      const { roomId, message } = action.payload;
      state.roomsMessages[roomId].push(message);
    },
  },
});

export const { SET_ROOMS, CLEAR_ROOMS, ADD_ROOM, SET_MESSAGES_TO_ROOM, CLEAR_MESSAGES, ADD_MESSAGE_TO_ROOM } =
  roomSlice.actions;
export default roomSlice.reducer;
