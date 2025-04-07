import { createSlice } from "@reduxjs/toolkit";

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

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setClassList: (state, action) => {
      console.log("state", state);
      console.log("action: ", action);
      state.classList = action.payload;
    },
  },
});
export const selectAdmin = (state) => state.admin;

export const { setClassList } = adminSlice.actions;

export default adminSlice.reducer;
