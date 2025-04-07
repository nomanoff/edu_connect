import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { academyApi } from "../api";

// get academy list thunk
export const getAcademyListAsync = createAsyncThunk(
  "auth/getAcademyList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await academyApi.getAcademyList();

      return response.data;
    } catch (error) {
      console.error("Error fetching academy list:", error);
      return rejectWithValue("Failed to fetch academy list");
    }
  }
);

const initialState = {
  academies: [],
};

const academySlice = createSlice({
  name: "academy",
  initialState,
  reducers: {
    setAcademies: (state, action) => {
      console.log("payload: ", action.payload);
      state.academies = action.payload;
    },
  },
});
export const selectAcademy = (state) => state.academy;

// export const {} = academySlice.actions;

export default academySlice.reducer;
