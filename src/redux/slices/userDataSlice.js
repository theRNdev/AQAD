import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    saveUserData: (state,action) => {
      state.userData=action.payload
    },
    daleteUserData: (state,action) => {
      state.userData=null
    },
  },
});

export const {saveUserData, daleteUserData} = userDataSlice.actions;
export default userDataSlice.reducer;
