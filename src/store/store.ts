import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./API/authApi";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import { postApi } from "./API/postApi";

export const store = configureStore({
  reducer: {
    userSlice,
    authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, postApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
