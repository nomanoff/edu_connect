import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi } from "../api";

const initialState = {
  classList: [],
  classDetail: null, // 'byId'
  loading: false,
  error: null,
};

// THUNKS

// Get class list for admin
export const getClassListAsync = createAsyncThunk(
  "class/getClassList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await classApi.getClassList();
      return response.data;
    } catch (error) {
      console.error("Error getting class list:", error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Post new class
export const postClassAsync = createAsyncThunk(
  "class/postClass",
  async (data, { rejectWithValue }) => {
    try {
      const response = await classApi.postClass(data);
      return response.data;
    } catch (error) {
      console.error("Error creating a class:", error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Get class by ID
export const getClassByIdAsync = createAsyncThunk(
  "class/getClassById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await classApi.getClassById(id);
      return response.data;
    } catch (error) {
      console.error("Error getting class by ID:", error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Delete class
export const deleteClassAsync = createAsyncThunk(
  "class/deleteClass",
  async (id, { rejectWithValue }) => {
    try {
      await classApi.deleteClass(id);
      return id;
    } catch (error) {
      console.error("Error deleting class:", error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Get my classes (e.g., teacher or student view)
export const getMyClassAsync = createAsyncThunk(
  "class/getMyClass",
  async (_, { rejectWithValue }) => {
    try {
      const response = await classApi.getMyClass();
      return response.data;
    } catch (error) {
      console.error("Error getting my classes:", error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// SLICE

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    resetClassSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Get class "Admin"
      .addCase(getClassListAsync.fulfilled, (state, action) => {
        state.classList = action.payload;
        state.loading = false;
      })

      // Post class 
      .addCase(postClassAsync.fulfilled, (state, action) => {
        state.classList.push(action.payload);
        state.loading = false;
      })

      // Delete class
      .addCase(deleteClassAsync.fulfilled, (state, action) => {
        state.classList = state.classList.filter(
          (item) => item.id !== action.payload
        );
        state.loading = false;
      })

      // Get by ID
      .addCase(getClassByIdAsync.fulfilled, (state, action) => {
        state.classDetail = action.payload;
        state.loading = false;
      })

      // Get class "Teacher"
      .addCase(getMyClassAsync.fulfilled, (state, action) => {
        state.classList = action.payload;
        state.loading = false;
      })

      // Matchers for pending/rejected
      .addMatcher(
        (action) =>
          action.type.startsWith("class/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("class/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

// EXPORTS
export const selectClass = (state) => state.class;
export const { resetClassSlice } = classSlice.actions;
export default classSlice.reducer;
