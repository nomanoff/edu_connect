import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi, teacherApi } from "../api"; 

const initialState = {
  teacherList: [],
  teacherId: null,
  isCreated: false,
  error: null,
};

// Teacher listni olish
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

// Register teacher
export const registerTeacherAsync = createAsyncThunk(
  "teacher/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.registerTeacher(data);
      console.log("Teacher created:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating teacher:", error.response?.data || error.message);
      return rejectWithValue(
        error.response?.data?.message || "Failed to create teacher"
      );
    }
  }
);

//  Teacher 
export const registerTeacherTokenAsync = createAsyncThunk(
  "teacher/registerToken",
  async (data, { rejectWithValue }) => {
    try {
      const response = await teacherApi.registerTeacherAsync(data);
      console.log("Token generated:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error generating teacher token:", error.response?.data || error.message);
      return rejectWithValue(
        error.response?.data?.message || "Failed to generate teacher token"
      );
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
      })

      .addCase(registerTeacherAsync.pending, (state) => {
        state.isCreated = false;
        state.error = null;
      })
      .addCase(registerTeacherAsync.fulfilled, (state, action) => {
        state.teacherId = action.payload.id;
        state.isCreated = true;
        state.error = null;
      })
      .addCase(registerTeacherAsync.rejected, (state, action) => {
        state.isCreated = false;
        state.error = action.payload;
      })

      // Token 
      .addCase(registerTeacherTokenAsync.pending, (state) => {
        state.isCreated = false;
        state.error = null;
      })
      .addCase(registerTeacherTokenAsync.fulfilled, (state, action) => {
        state.teacherId = action.payload;
        state.isCreated = true;
        state.error = null;
      })
      .addCase(registerTeacherTokenAsync.rejected, (state, action) => {
        state.isCreated = false;
        state.error = action.payload;
      });
  },
});

export const selectTeachers = (state) => state.teacher;

export const { resetTeacherSlice } = teacherSlice.actions;

export default teacherSlice.reducer;
