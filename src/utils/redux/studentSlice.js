import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { studentApi } from "../api";

const initialState = {
  studentList: [],
  studentDetail: null, //  'byId' | 'byToken'
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// THUNKS 

// Get all students
export const getStudentListAsync = createAsyncThunk(
  "student/getStudentList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await studentApi.getStudentList();
      return response.data;
    } catch (error) {
      console.error("Error fetching student list:", error);
      return rejectWithValue("Failed to fetch student list");
    }
  }
);

// Post new student
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

// Get student by ID
export const getStudentByIdAsync = createAsyncThunk(
  "student/getStudentById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await studentApi.getStudentById(id);
      return response.data;
    } catch (error) {
      console.error("Error fetching student by ID:", error);
      return rejectWithValue("Failed to fetch student by ID");
    }
  }
);

// Delete student by ID
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

// Get student by token
export const getStudentByTokenAsync = createAsyncThunk(
  "student/getStudentByToken",
  async (token, { rejectWithValue }) => {
    try {
      const response = await studentApi.getStudentByToken(token);
      return response.data;
    } catch (error) {
      console.error("Error fetching student by token:", error);
      return rejectWithValue("Failed to fetch student by token");
    }
  }
);

// SLICE 
const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    resetStudentSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Get list
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

      // Post student
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
      })

      // Get by ID
      .addCase(getStudentByIdAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getStudentByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.studentDetail = action.payload;
      })
      .addCase(getStudentByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Delete student
      .addCase(deleteStudentAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteStudentAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.studentList = state.studentList.filter(
          (student) => student.id !== action.payload
        );
      })
      .addCase(deleteStudentAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Get by token
      .addCase(getStudentByTokenAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getStudentByTokenAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.studentDetail = action.payload;
      })
      .addCase(getStudentByTokenAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// SELECTORS & EXPORTS 

export const selectStudent = (state) => state.student;

export const { resetStudentSlice } = studentSlice.actions;

export default studentSlice.reducer;
