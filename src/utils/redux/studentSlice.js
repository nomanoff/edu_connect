import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { studentApi } from "../api"; 

const initialState = {
  studentList: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// ✅ Get student list thunk
export const getStudentListAsync = createAsyncThunk(
  "student/getStudentList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await studentApi.getStudentList(); // ✅ to‘g‘rilandi
      return response.data;
    } catch (error) {
      console.error("Error getting student list:", error);
      return rejectWithValue("Failed to fetch student list");
    }
  }
);

// ✅ Post student thunk
export const postStudentAsync = createAsyncThunk(
  "student/postStudent",
  async (data, { rejectWithValue }) => {
    try {
      const response = await studentApi.postStudent(data);
      return response.data;
    } catch (error) {
      console.error("Error creating a student:", error);
      return rejectWithValue("Failed creating a student");
    }
  }
);

// ✅ Slice
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
        state.error = null;
      })
      .addCase(getStudentListAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.studentList = action.payload;
      })
      .addCase(getStudentListAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(postStudentAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postStudentAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.studentList.push(action.payload);
      })
      .addCase(postStudentAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectStudents = (state) => state.student;
export const { resetStudentSlice } = studentSlice.actions;

export default studentSlice.reducer;
