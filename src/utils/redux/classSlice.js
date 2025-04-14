import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 📦 GET: All classes
export const fetchClasses = createAsyncThunk(
  "class/fetchClasses",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/classes"); // API endpoint
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// ➕ POST: Create a new class
export const createClass = createAsyncThunk(
  "class/createClass",
  async (newClassData, thunkAPI) => {
    try {
      const response = await axios.post("/api/classes", newClassData); // API endpoint
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Slice
const classSlice = createSlice({
  name: "class",
  initialState: {
    classes: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch classes
      .addCase(fetchClasses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classes = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Create class
      .addCase(createClass.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createClass.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classes.push(action.payload);
      })
      .addCase(createClass.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default classSlice.reducer;
