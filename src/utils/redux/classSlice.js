// slice/classSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi } from "../api";

const initialState = {
  classList: [],
  loading: false,
  error: null,
};

export const getClassListAsync = createAsyncThunk(
  "class/getClassesList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await classApi.getClassList();
      return response.data;
    } catch (error) {
      console.error("Error getting class list:", error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

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

export const deleteClassAsync = createAsyncThunk(
  "class/deleteClass",
  async (id, { rejectWithValue }) => {
    try {
      await classApi.deleteClass(id);
      return id;
    } catch (error) {
      console.error("Delete error:", error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    resetStudentSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClassListAsync.fulfilled, (state, action) => {
        state.classList = action.payload;
        state.loading = false;
      })
      .addCase(postClassAsync.fulfilled, (state, action) => {
        state.classList.push(action.payload);
        state.loading = false;
      })
      .addCase(deleteClassAsync.fulfilled, (state, action) => {
        state.classList = state.classList.filter((item) => item.id !== action.payload);
        state.loading = false;
      })
      .addMatcher(
        (action) => action.type.startsWith("class/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("class/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const selectClass = (state) => state.class;
export const { resetStudentSlice } = classSlice.actions;
export default classSlice.reducer;
