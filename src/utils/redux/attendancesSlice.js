import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { attendanceApi } from "../api";

const initialState = {
  attendanceList: [],
  loading: false,
  error: null,
};

// post attendance thunk
export const postAttendanceAsync = createAsyncThunk(
  "attendance/postAttendance",
  async (data, { rejectWithValue }) => {
    try {
      const response = await attendanceApi.postAttendance(data);
      return response.data;
    } catch (error) {
      console.error("Error creating an attendance:", error);
      return rejectWithValue("Failed to create attendance");
    }
  }
);

// get attendance by classId and date
export const getAttendanceByClassAndDate = createAsyncThunk(
  "attendance/getByClassAndDate",
  async ({ classId, date }, { rejectWithValue }) => {
    try {
      const response = await attendanceApi.getByClassAndDate(classId, date);
      return response.data;
    } catch (error) {
      console.error("Error fetching attendance:", error);
      return rejectWithValue("Failed to fetch attendance by class and date");
    }
  }
);

// get attendance by studentId and classId and date
export const getAttendanceByStudentClassDate = createAsyncThunk(
  "attendance/getByStudentClassDate",
  async ({ studentId, classId, date }, { rejectWithValue }) => {
    try {
      const response = await attendanceApi.getByStudentClassDate(studentId, classId, date);
      return response.data;
    } catch (error) {
      console.error("Error fetching student-class-date attendance:", error);
      return rejectWithValue("Failed to fetch specific attendance");
    }
  }
);

// get all attendances by studentId
export const getAllAttendanceByStudent = createAsyncThunk(
  "attendance/getAllByStudent",
  async (studentId, { rejectWithValue }) => {
    try {
      const response = await attendanceApi.getAllByStudent(studentId);
      return response.data;
    } catch (error) {
      console.error("Error fetching all student attendances:", error);
      return rejectWithValue("Failed to fetch all attendances for student");
    }
  }
);

// Slice
const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    resetAttendanceSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postAttendanceAsync.fulfilled, (state, action) => {
        state.attendanceList.push(action.payload);
      })
      .addCase(getAttendanceByClassAndDate.fulfilled, (state, action) => {
        state.attendanceList = action.payload;
      })
      .addCase(getAttendanceByStudentClassDate.fulfilled, (state, action) => {
        state.attendanceList = action.payload;
      })
      .addCase(getAllAttendanceByStudent.fulfilled, (state, action) => {
        state.attendanceList = action.payload;
      })
      .addMatcher(
        (action) => action.type.startsWith("attendance/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("attendance/") && action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("attendance/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const selectAttendance = (state) => state.attendance;
export const { resetAttendanceSlice } = attendanceSlice.actions;
export default attendanceSlice.reducer;
