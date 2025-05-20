import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { parentApi } from "../api";

const initialState = {
  parentList: [],
  loading: false,
  error: null,
  selectedStudentId: null,
};

// THUNKS

// Get all parents
export const getParentListAsync = createAsyncThunk(
  "parent/getParentList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await parentApi.getParentList();
      return response.data;
    } catch (error) {
      console.error("Error fetching parent list:", error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Post new parent
export const postParentAsync = createAsyncThunk(
  "parent/postParent",
  async (parentData, { rejectWithValue }) => {
    try {
      const response = await parentApi.postParent(parentData);
      return response.data;
    } catch (error) {
      console.error("Error creating parent:", error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// SLICE

const parentSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    resetParentSlice: () => initialState,
    setSelectedStudentId: (state, action) => {
      state.selectedStudentId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getParentListAsync.fulfilled, (state, action) => {
        state.parentList = action.payload;
        state.loading = false;
      })
      .addCase(postParentAsync.fulfilled, (state, action) => {
        state.parentList.push(action.payload);
        state.loading = false;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("parent/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("parent/") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

// EXPORTS
export const selectParent = (state) => state.parent;
export const { resetParentSlice, setSelectedStudentId } = parentSlice.actions;
export default parentSlice.reducer;
