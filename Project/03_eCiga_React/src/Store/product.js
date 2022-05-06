import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name : 'product',
	initialState : {
		product: {
			productId : '',
			productName : '',
			productPrice : '',
			productBrand : '',
			productFlavor : '',
			productContent : '',
			productRate : ''
		}
	},
	reducers : {
		storeInState: (state, action)=> {
			state = action.payload.product
		}
	}
})

export const productReducers = productSlice.actions
export default productSlice;