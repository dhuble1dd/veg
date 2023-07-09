import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CodeReducer from "./reducer";

const rootReducer = combineReducers({
    code: CodeReducer
})

export const store = configureStore({
    reducer: rootReducer,
})