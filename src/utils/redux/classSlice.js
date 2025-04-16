import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi } from "../api";

const initialState = {
  studentList: [],
};

// get academy list thunk
export const getClassesListAsync = createAsyncThunk(
  "auth/getClassesList",
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

const classesSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    resetStudentSlice: () => initialState,
  },
});
export const selectClasses = (state) => state.class;

export const { resetStudentSlice } = classesSlice.actions;

export default classesSlice.reducer;
