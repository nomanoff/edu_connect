import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi } from "../api";

const tables = [
  {
    name: "Frontend 001",
    time: "17:00 ~ 19:00",
    teacher: "Adam",
    grade: "5",
    rate: "90%",
  },
  {
    name: "Frontend 001",
    time: "17:00 ~ 19:00",
    teacher: "Adam",
    grade: "5",
    rate: "90%",
  },
  {
    name: "Frontend 001",
    time: "17:00 ~ 19:00",
    teacher: "Adam",
    grade: "5",
    rate: "90%",
  },
  {
    name: "Frontend 001",
    time: "17:00 ~ 19:00",
    teacher: "Adam",
    grade: "5",
    rate: "90%",
  },
  {
    name: "Frontend 001",
    time: "17:00 ~ 19:00",
    teacher: "Adam",
    grade: "5",
    rate: "90%",
  },
];
const initialState = {
  classList: tables,
};

// get academy list thunk
export const getClassListAsync = createAsyncThunk(
  "auth/getAcademyList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await classApi.getAcademyList();

      return response.data;
    } catch (error) {
      console.error("Error fetching academy list:", error);
      return rejectWithValue("Failed to fetch academy list");
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setClassList: (state, action) => {
      console.log("state", state);
      console.log("action: ", action);
      state.classList = action.payload;
    },

    resetAdminSlice: () => initialState,
  },
});
export const selectAdmin = (state) => state.admin;

export const { setClassList, resetAdminSlice } = adminSlice.actions;

export default adminSlice.reducer;
