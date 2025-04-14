// classSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi } from "../api";

const initialState = {
  classes: [],
  status: "idle",
  error: null,
};

// Get class list
export const getClassListAsync = createAsyncThunk(
  "class/getClassList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await classApi.getClassesList();
      return response.data;
    } catch (error) {
      console.error("Error fetching class list:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to fetch class list");
    }
  }
);

// Create new class
export const createClassAsync = createAsyncThunk(
  "class/createClass",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await classApi.createClass(formData);
      return response.data;
    } catch (error) {
      console.error("Error creating class:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to create class");
    }
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    resetClassSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClassListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getClassListAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classes = action.payload;
      })
      .addCase(getClassListAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createClassAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createClassAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classes.push(action.payload);
      })
      .addCase(createClassAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectClass = (state) => state.class;
export const { resetClassSlice } = classSlice.actions;
export default classSlice.reducer;
