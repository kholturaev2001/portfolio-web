import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: []
};

export const changeLang = createSlice({
  name: "changeLang",
  initialState,
  reducers: {
    changeLangAcc: (state, action) => {
      state.allData = action.payload;
    },
  },
});

export const { changeLangAcc } = changeLang.actions;

export default changeLang.reducer;
