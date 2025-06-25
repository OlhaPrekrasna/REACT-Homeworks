import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Dan', email: 'dan@example.com' },
    { id: 2, name: 'Kelly', email: 'kelly@example.com' },
    { id: 3, name: 'Klaus', email: 'klaus@example.com' },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
