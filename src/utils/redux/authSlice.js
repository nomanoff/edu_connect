import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});
export const selectAuth = (state) => state.auth;

export const { setUserId } = authSlice.actions;

export default authSlice.reducer;
