import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api";

const initialState = {
  userId: null,
  isAuthenticated: false,
  userRole: "",
};

//  register admin thunk
export const registerAdminAsync = createAsyncThunk(
  "auth/registerAdmin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.registerAdmin(data);
      return response.data;
    } catch (error) {
      console.error("Error registering admin:", error);
      return rejectWithValue("Error registering admin user!");
    }
  }
);

//  register teacher thunk
export const registerTeacherAsync = createAsyncThunk(
  "auth/registerTeacher",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.registerTeacher(data);
      return response.data;
    } catch (error) {
      console.error("Error registering teacher:", error);
      return rejectWithValue("Error registering teacher user!");
    }
  }
);

//  register parent thunk
export const registerParentAsync = createAsyncThunk(
  "auth/registerParent",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.registerParent(data);
      return response.data;
    } catch (error) {
      console.error("Error registering parent:", error);
      return rejectWithValue("Error registering parent user!");
    }
  }
);

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
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },

    resetAuthSlice: () => initialState,
  },
});
export const selectAuth = (state) => state.auth;

export const { setUserId, setUserRole, setIsAuthenticated, resetAuthSlice } =
  authSlice.actions;

export default authSlice.reducer;
