import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api";

const initialState = {
  userId: null,
  isAuthenticated: false,
};

// get academy list thunk
export const postLoginAsync = createAsyncThunk(
  "auth/postLoginAsync",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.login(data);

      return response.data;
    } catch (error) {
      console.error("Error fetching academy list:", error);
      return rejectWithValue("Failed to fetch academy list");
    }
  }
);

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
