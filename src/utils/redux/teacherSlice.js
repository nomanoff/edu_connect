import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi, teacherApi } from "../api";

const initialState = {
  teacherList: [],
};

export const getTeacherListAsync = createAsyncThunk(
  "teacher/getTeacherList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await teacherApi.getTeacherList();
      return response.data;
    } catch (error) {
      console.error("Error fetching teacher list:", error);
      return rejectWithValue("Failed to fetch teacher list");
    }
  }
);

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    resetTeacherSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeacherListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTeacherListAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teacherList = action.payload;
      })
      .addCase(getTeacherListAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectTeachers = (state) => state.teacher;

export const { resetTeacherSlice } = teacherSlice.actions;

export default teacherSlice.reducer;
