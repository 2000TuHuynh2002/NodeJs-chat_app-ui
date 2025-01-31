import { createSlice } from "@reduxjs/toolkit";

interface roomsMessagesType {
  id: string;
  memberCount: number;
  memberID: Array<string>;
  friend: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    role: Array<string>;
  };
  updatedAt: string;
  cretedAt: string;
  messages: Array<{
    senderId: string;
    recipientId: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }>;
}

const initialState = {
  rooms: [] as Array<roomsMessagesType>,
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
      state.rooms = [action.payload, ...state.rooms];
    },
    SET_MESSAGES_TO_ROOM: (state, action) => {
      const { roomId, messages } = action.payload;
      const room = state.rooms.find((room) => room.id === roomId);
      if (room) {
        room.messages = messages;
      }
    },
    ADD_MESSAGE_TO_ROOM: (state, action) => {
      const { roomId, message } = action.payload;
      const room = state.rooms.find((room) => room.id === roomId);
      if (room) {
        room.messages = [message, ...room.messages];
      }
    },
  },
});

export const {
  SET_ROOMS,
  CLEAR_ROOMS,
  ADD_ROOM,
  SET_MESSAGES_TO_ROOM,
  ADD_MESSAGE_TO_ROOM,
} = roomSlice.actions;
export default roomSlice.reducer;
