import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	user: false,
	isLoading: false,
	token: null
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
	  loginSuccess(state, action) {
		state.user = action.data
		state.token=action.data.token
	  },
	  IsLoading(state, action) {
		state.isLoading= action.data
	  },
	},
  });
  
  export const userActions = userSlice.actions;
  
  export default userSlice;
  
