import { createSlice } from "@reduxjs/toolkit";
import {setStorage} from "../helpers/setStorage";



const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
  },
  reducers: {
    // LOGIN USER
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = action.payload
      setStorage("token", action.payload.token)
      state.error = null;
  
    },
    loginUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // REGISTER USER
    registerUserStart: (state) => {
      state.isLoading = true;

    },
    registerUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = action.payload
      setStorage("token", action.payload.token)
    },
    registerUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.loggedIn = false
    },
    logOutUser: (state) => {
      state.loggedIn = false;
      state.user = null;
    }
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
  logOutUser
} = authSlice.actions;
export default authSlice.reducer;