import { createSlice } from '@reduxjs/toolkit';

const getStoredUser = () => {
  try {
    const stored = localStorage.getItem('skymart-user');
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    return null;
  }
};

const initialState = {
  user: getStoredUser(),
  isAuthenticated: !!getStoredUser(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('skymart-user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('skymart-user');
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem('skymart-user', JSON.stringify(state.user));
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
