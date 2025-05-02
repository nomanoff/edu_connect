import { createAsyncThunk } from "@reduxjs/toolkit";
import { attendanceApi } from "../api";

const initialState = {
  attendanceSlice: [],
};

// post attendances thunk
export const postAttendanceAsync = createAsyncThunk(
  "attendance/postAttendance",
  async (data, { rejectWithValue }) => {
    try {
      const response = await attendanceApi.postAttendance(data);
      return response.data;
    } catch (error) {
      console.error("Error creating a attendance:", error);
      return rejectWithValue("Failed creating a attendance");
    }
  }
);

// get attendance thunk
export const getAttendanceListAsync = createAsyncThunk(
  "attendance/getAttendance",
  async (id, { rejectWithValue }) => {
    try {
      await attendanceApi.getAttendanceListAsync(id);
      return id;
    } catch (error) {
      console.log("attendance error:", error);
      return rejectWithValue("Failed creating a attendance");
    }
  }
);
