import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  initialState: {
    status: false,
    user: null,
  },
  name: "auth",
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.user = action.payload;

      return state;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
