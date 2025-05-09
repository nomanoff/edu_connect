import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, createTransform } from "redux-persist";

import authSlice from "./authSlice";
import academySlice from "./academySlice";
import adminSlice from "./adminSlice";
import studentSlice from "./studentSlice";
import classSlice from "./classSlice";
import teacherSlice from "./teacherSlice"; 
import attendancesSlice from "./attendancesSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  academy: academySlice,
  admin: adminSlice,
  student: studentSlice,
  class: classSlice,
  teacher: teacherSlice,
  attendance: attendancesSlice,
});

const SetMarkerTransform = createTransform(
  (inboundState, key) => {
    if (key === "map") {
      return { ...inboundState, alls: null };
    }
    return inboundState;
  },
  (outboundState) => outboundState
);

const persistConfig = {
  key: "root",
  storage: storageSession,
  transforms: [SetMarkerTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
