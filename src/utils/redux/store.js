import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, createTransform } from "redux-persist";

// Slice'lar
import authSlice from "./authSlice";
import academySlice from "./academySlice";
import adminSlice from "./adminSlice";
import studentSlice from "./studentSlice";
import classSlice from "./classSlice";
import teacherSlice from "./teacherSlice";
import parentSlice from "./parentSlice";

// Barcha reducerlarni birlashtirish
const rootReducer = combineReducers({
  auth: authSlice,
  academy: academySlice,
  admin: adminSlice,
  student: studentSlice,
  class: classSlice,
  teacher: teacherSlice,
  parent: parentSlice,
});

// Transform faqat kerakli key'ga ishlaydi
const SetMarkerTransform = createTransform(
  (inboundState, key) => {
    if (key === "map") {
      return { ...inboundState, alls: null };
    }
    return inboundState;
  },
  (outboundState) => outboundState
);

// persist konfiguratsiyasi
const persistConfig = {
  key: "root",
  storage: storageSession, // Session storage'ni ishlatish
  transforms: [SetMarkerTransform], // Keraksiz key'ni transformatsiya qilish
};

// persist qilinadigan reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store'ni yaratish
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist uchun kerak
    }),
  devTools: true, // Redux devTools'ni faollashtirish
});
