import { combineReducers } from '@reduxjs/toolkit';
import userDataReducer from './slices/userDataSlice';

const rootReducer = combineReducers({
  userData:userDataReducer,
});

export default rootReducer;
