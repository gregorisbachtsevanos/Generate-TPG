import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface userState {
	authSlice: string | null;
}

const initialState = {
	authSlice: null,
} as userState;

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth(state, action) {
			state.authSlice = action.payload;
		},
	},
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;

export const selectUserInfo = (state: RootState) => state.user.authSlice;
