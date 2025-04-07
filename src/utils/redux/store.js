import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authSlice from "./authSlice";
import academySlice from "./academySlice";
import adminSlice from "./adminSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  academy: academySlice,
  admin: adminSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: true,
});
