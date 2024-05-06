import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	products: [],
};

const productSlice = createSlice({
	name: 'products',
	initialState: initialState,
	reducers: {
	  productList(state, action) {
		state.products = action.data
	  },
	},
  });
  
  export const productActions = productSlice.actions;
  
  export default productSlice;
  
