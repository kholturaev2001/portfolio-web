import { configureStore } from "@reduxjs/toolkit";
import changeLangReducer from "./changeLang/changeLang";

export const store = configureStore({
  reducer: {
    changeLang: changeLangReducer,
  },
});
