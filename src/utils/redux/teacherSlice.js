import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi, teacherApi } from "../api";

const initialState = {
  teacherList: [],
  teacherId: null,
  isCreated: false,
  loading: false,
  error: null,
};

// THUNKS

// Get teacher list
export const getTeacherListAsync = createAsyncThunk(
  "teacher/getTeacherList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await teacherApi.getTeacherList();
      return response.data;
    } catch (error) {
      console.error("Error fetching teacher list:", error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch teacher list"
      );
    }
  }
);

// Register new teacher
export const registerTeacherAsync = createAsyncThunk(
  "teacher/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.registerTeacher(data);
      return response.data;
    } catch (error) {
      console.error("Error creating teacher:", error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to create teacher"
      );
    }
  }
);

// Delete teacher
export const deleteTeacherAsync = createAsyncThunk(
  "teacher/delete",
  async (id, { rejectWithValue }) => {
    try {
      await authApi.deleteTeacher(id);
      return id;
    } catch (error) {
      console.error("Error deleting teacher:", error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to delete teacher"
      );
    }
  }
);

// Generate teacher token
export const registerTeacherTokenAsync = createAsyncThunk(
  "teacher/registerToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await teacherApi.registerTeacherAsync();
      return response.data;
    } catch (error) {
      console.error("Error generating teacher token:", error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to generate teacher token"
      );
    }
  }
);

// SLICE
const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    resetTeacherSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // getTeacherList
      .addCase(getTeacherListAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTeacherListAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.teacherList = action.payload;
      })
      .addCase(getTeacherListAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // registerTeacher
      .addCase(registerTeacherAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isCreated = false;
      })
      .addCase(registerTeacherAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.teacherId = action.payload.id;
        state.isCreated = true;
      })
      .addCase(registerTeacherAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isCreated = false;
      })

      // deleteTeacher
      .addCase(deleteTeacherAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTeacherAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.teacherList = state.teacherList.filter(
          (t) => t.id !== action.payload
        );
      })
      .addCase(deleteTeacherAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // registerTeacherToken
      .addCase(registerTeacherTokenAsync.pending, (state) => {
        state.loading = true;
        state.isCreated = false;
        state.error = null;
      })
      .addCase(registerTeacherTokenAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.teacherId = action.payload.tokenForNewTeacher;
        state.isCreated = true;
      })
      .addCase(registerTeacherTokenAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isCreated = false;
      });
  },
});

// EXPORTS
export const selectTeacher = (state) => state.teacher;
export const { resetTeacherSlice } = teacherSlice.actions;
export default teacherSlice.reducer;
