import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "~redux/store";

const selectAuth = (state: RootState) => state.auth;

export const currentUserSelector = createSelector(
    [selectAuth],
    (auth) => auth.currentUser,
);
