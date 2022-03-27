// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'


const initialState = { counter : 0, showCounter : true }

const counterSlice = createSlice({
	name : 'counter', initialState : initialState, reducers : {
		// if duplicated destructured value  is null, put amount : 1
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

//////////////////////////////////////////////////////////////
//1. CreateStore & reducer and  connect createStore to reducer
// const store = createStore()

//2. create reducer and mutates the state
const counterReducer = (state = initialState, { type, amount = 1 }) => {
	//receive action from component by dispatching
	if ( type === 'increment' ) {
		// why do we have to return state ->  never mutate the state, but overWrite it !!
		return {
			//quiet inconvenient
			counter : state.counter + amount, showCounter : state.showCounter
		}
	}
	if ( type === 'decrement' ) {
		return {
			//quiet inconvenient
			counter : state.counter - amount, showCounter : state.showCounter
		}
	}

	if ( type === 'toggle' ) {
		return {
			//quiet inconvenient
			counter : state.counter, showCounter : !state.showCounter
		}
	}

	return state;
}

// create [action creator methods] to creat action and dispatch an action(+ unique id)

// $$$$$$ (createStore) changes from
// const store = createStore ( counterReducer )
// $$$$$ changes to
// const store = createStore ( counterSlice.reducer )
// $$$$$ changes to
const store = configureStore({
	// must have single reducer
	reducer : counterSlice.reducer
	// if many,
	// reducer : { a: counterSlice.reducer, b: counterSlice.reducer...}
})


export const counterActionsCreator = counterSlice.actions;
export default store;