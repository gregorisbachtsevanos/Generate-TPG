import { configureStore } from "@reduxjs/toolkit";

import { api } from "./services/api/api";
import authReducer from "./state/auth";

export const store = configureStore({
	reducer: {
		user: authReducer,
		[api.reducerPath]: api.reducer,
	},
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
