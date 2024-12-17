import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: '',
  status: '',
};

const messageSlice = createSlice({
  name: 'message',
  initialState: initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setMessage, setStatus } = messageSlice.actions;
export default messageSlice.reducer;