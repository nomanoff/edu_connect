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
];

const initialState = {
  classList: tables,
};

export const getClassesAsync = createAsyncThunk(
  "classes/getClassesList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await classApi.getAcademyList();
      return response.data;
    } catch (error) {
      console.error("Error fetching academy list:", error);
      return rejectWithValue("Failed to fetch academy list");
    }
  }
);




const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    setClassList: (state, action) => {
      state.classList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getClassesAsync.fulfilled, (state, action) => {
      state.classList = action.payload;
    });
  },
});

export const { setClassList } = classesSlice.actions;

export const selectClasses = (state) => state.classes;

export default classesSlice.reducer;
