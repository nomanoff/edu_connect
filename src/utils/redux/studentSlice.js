// src/utils/redux/studentSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { studentApi } from "../api";

const initialState = {
  studentList: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Get student list thunk
export const getStudentListAsync = createAsyncThunk(
  "student/getStudentList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await studentApi.getStudentList();
      return response.data;
    } catch (error) {
      console.error("Error fetching student list:", error);
      return rejectWithValue("Failed to fetch student list");
    }
  }
);

//  Post student thunk
export const postStudentAsync = createAsyncThunk(
  "student/postStudent",
  async (data, { rejectWithValue }) => {
    try {
      const response = await studentApi.postStudent(data);
      return response.data;
    } catch (error) {
      console.error("Error creating a student:", error);
      return rejectWithValue("Failed to create student");
    }
  }
);

//  Delete student thunk
export const deleteStudentAsync = createAsyncThunk(
  "student/deleteStudent",
  async (id, { rejectWithValue }) => {
    try {
      await studentApi.deleteStudent(id);
      return id;
    } catch (error) {
      console.error("Error deleting student:", error);
      return rejectWithValue("Failed to delete student");
    }
  }
);


const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    resetStudentSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStudentListAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.studentList = action.payload;
      })
      .addCase(getStudentListAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(postStudentAsync.fulfilled, (state, action) => {
        state.studentList.push(action.payload);
      })
      .addCase(deleteStudentAsync.fulfilled, (state, action) => {
        state.studentList = state.studentList.filter(
          (student) => student.id !== action.payload
        );
      });
  },
});


export const selectStudent = (state) => state.student;

export const { resetStudentSlice } = studentSlice.actions;


export default studentSlice.reducer;
