import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi, teacherApi } from "../api";

export const deleteClassAsync = createAsyncThunk(
    "classes/deleteClass",
    async (id, { rejectWithValue }) => {
      try {
        await classApi.deleteClass(id); // classApi to‘g‘ri ishlatilmoqda
        return id;
      } catch (error) {
        console.log("Delete error:", error); // foydali log
        return rejectWithValue(error?.response?.data || error.message);
      }
    }
  );
  

extraReducers: (builder) => {
  builder

    .addCase(deleteClassAsync.fulfilled, (state, action) => {
      state.classList = state.classList.filter((item) => item.id !== action.payload);
    });
}
