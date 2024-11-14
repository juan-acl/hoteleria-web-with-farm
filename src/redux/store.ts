import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { authReducer } from "./slices/auth.slice";

const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware();

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
