import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi } from "../api";

const initialState = {
  classList: [],
};

// get academy list thunk
export const getClassListAsync = createAsyncThunk(
  "auth/getClassList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await classApi.getClassList();

      return response.data;
    } catch (error) {
      console.error("Error fetching class list:", error);
      return rejectWithValue("Failed to fetch class list");
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
        state.classList = [];
      })
      .addCase(getClassListAsync.fulfilled, (state, action) => {
        state.classList = action.payload;
      })
      .addCase(getClassListAsync.rejected, (state) => {
        state.classList = [];
      });
  },
});
export const selectClass = (state) => state.class;

export const { resetClassSlice } = classSlice.actions;

export default classSlice.reducer;
