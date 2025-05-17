// parentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { parentApi } from '../api';

// Async thunk to post a new parent
export const postParentAsync = createAsyncThunk(
  'parent/postParent',
  async (parentData) => {
    try {
      const data = await parentApi.postParent(parentData);
      return data;
    } catch (error) {
      console.error("Error creating parent", error);
      throw error;
    }
  }
);

// Async thunk to get the parent list
export const getParentListAsync = createAsyncThunk(
  'parent/getParentList',
  async () => {
    try {
      const data = await parentApi.getClassList();
      return data;
    } catch (error) {
      console.error("Error fetching parent list", error);
      throw error;
    }
  }
);

const parentSlice = createSlice({
  name: 'parent',
  initialState: {
    parentList: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postParentAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postParentAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.parentList.push(action.payload);
      })
      .addCase(postParentAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getParentListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getParentListAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.parentList = action.payload;
      })
      .addCase(getParentListAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default parentSlice.reducer;
export const selectParent = (state) => state.parent;
