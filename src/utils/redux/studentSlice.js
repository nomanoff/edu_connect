import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { studentApi } from "../api";

const initialState = {
  studentList: [],
  studentDetail: null,
  status: "idle",
  error: null,
};

// THUNKS
export const getStudentListAsync = createAsyncThunk(
  "student/getStudentList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await studentApi.getStudentList();
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch student list");
    }
  }
);

export const postStudentAsync = createAsyncThunk(
  "student/postStudent",
  async (data, { rejectWithValue }) => {
    try {
      const response = await studentApi.postStudent(data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to create student");
    }
  }
);

export const getStudentByIdAsync = createAsyncThunk(
  "student/getStudentById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await studentApi.getStudentById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch student by ID");
    }
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "student/deleteStudent",
  async (id, { rejectWithValue }) => {
    try {
      await studentApi.deleteStudent(id);
      return id;
    } catch (error) {
      return rejectWithValue("Failed to delete student");
    }
  }
);

export const getStudentByTokenAsync = createAsyncThunk(
  "student/getStudentByToken",
  async (token, { rejectWithValue }) => {
    try {
      const response = await studentApi.getStudentByToken(token);
      return response.data;
    } catch (error) {
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
      // List
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

      // Create
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

      // By ID
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

      // Delete
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

      // By Token
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
