import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classApi } from "../api";

const initialState = {
  classList: [],
};

// get class list thunk
export const getClassListAsync = createAsyncThunk(
  "class/getClassesList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await classApi.getClassList();
      return response.data;
    } catch (error) {
      console.error("Error getting class list:", error);
      return rejectWithValue("Failed to fetch class list");
    }
  }
);

// post class thunk
export const postClassAsync = createAsyncThunk(
  "class/postClass",
  async (data, { rejectWithValue }) => {
    try {
      const response = await classApi.postClass(data);
      return response.data; // 👈 bu muhim, shuni saqlab qolamiz
    } catch (error) {
      console.error("Error creating a class:", error);
      return rejectWithValue("Failed creating a class");
    }
  }
);



export const deleteClassAsync = createAsyncThunk(
  "classes/deleteClass",
  async (id, { rejectWithValue }) => {
    try {
      await classApi.deleteClass(id); 
      return id;
    } catch (error) {
      console.log("Delete error:", error); 
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






// slice
const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    resetStudentSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClassListAsync.fulfilled, (state, action) => {
        state.classList = action.payload;
      })
      .addCase(postClassAsync.fulfilled, (state, action) => {
        state.classList.push(action.payload); // 👈 yangi classni listga qo‘sh
      });
  },
});

export const selectClass = (state) => state.class;

export const { resetStudentSlice } = classSlice.actions;

export default classSlice.reducer;
