import { createSlice } from "@reduxjs/toolkit";

const init_user = JSON.parse(sessionStorage.getItem("user") as string) || {};

const initialState = {
  username: init_user.username || null,
  email: init_user.email || null,
  firstName: init_user.firstName || null,
  lastName: init_user.lastName || null,
  fullName: `${init_user.firstName} ${init_user.lastName}` || null,
  roles: init_user.roles || [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});

export default userSlice.reducer;
