import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi } from "../api";

const initialState = {
  studentList: [],
};

// get academy list thunk
export const getStudentListAsync = createAsyncThunk(
  "auth/getStudentList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await classApi.getStudentList();

      return response.data;
    } catch (error) {
      console.error("Error fetching student list:", error);
      return rejectWithValue("Failed to fetch student list");
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    resetStudentSlice: () => initialState,
  },
});
export const selectStudent = (state) => state.student;

export const { resetStudentSlice } = studentSlice.actions;

export default studentSlice.reducer;
