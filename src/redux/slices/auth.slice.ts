import { createSlice } from "@reduxjs/toolkit";
import { InitialStateAuth } from "~types/slices/_auth.slice";
import { NAME_SLICES } from "./nameSlices";

const initialState: InitialStateAuth = {
    currentUser: null,
    token: null,
};

const authSlice = createSlice({
    name: NAME_SLICES.AUTH_SLICE,
    initialState,
    reducers: {},
});

export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
