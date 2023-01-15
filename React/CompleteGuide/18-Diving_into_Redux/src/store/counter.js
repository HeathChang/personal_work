import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter : 0, showCounter : true }

const counterSlice = createSlice({
	name : 'counter',
	initialState : initialCounterState,
	reducers : {
		// if duplicated destructured value  is null, put amount : 1
		// action , payload (name should be followed)
		increment (state, { payload : { amount } = { amount : 1 } }) {
			//immutable: automatically over-riding
			// state.counter++
			console.log('check payload:: ', amount)
			state.counter = state.counter + amount
		},
		decrement (state, { amount = 1 }) {
			state.counter = state.counter - amount
		},
		toggleCounter (state) {
			state.showCounter = !state.showCounter
		}
	}
})

export default counterSlice;