import { createSlice } from '@reduxjs/toolkit';

// Initial state for the auth slice, extracting user info from local storage or defaulting to null
const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // Defining reducers for actions that can update the state
  reducers: {
    // Reducer to set user credentials in the state and local storage
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      // Saving user info in local storage as a stringified JSON object
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    // Reducer to log the user out by resetting user info in the state and removing it from local storage
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
