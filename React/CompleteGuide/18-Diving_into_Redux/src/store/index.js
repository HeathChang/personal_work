// import { createStore } from 'redux';
import { createSlice , configureStore } from '@reduxjs/toolkit'


const initialState = { counter : 0 , showCounter : true }

const counterSlice = createSlice ( {
	name : 'counter' , initialState : initialState , reducers : {
		increment ( state , { type , amount = 1 } ) {
			//immutable: automatically over-riding
			// state.counter++
			state.counter = state.counter + amount
		} , decrement ( state , { type , amount = 1 } ) {
			state.counter = state.counter - amount
		} , toggleCounter ( state ) {
			state.showCounter = !state.showCounter
		}
	}
} )

//////////////////////////////////////////////////////////////
//1. CreateStore & reducer and  connect createStore to reducer
// const store = createStore()

//2. create reducer and mutates the state
const counterReducer = ( state = initialState , { type , amount = 1 } ) => {
	//receive action from component by dispatching
	if ( type === 'increment' ) {
		// why do we have to return state ->  never mutate the state, but overWrite it !!
		return {
			//quiet inconvenient
			counter : state.counter + amount , showCounter : state.showCounter
		}
	}
	if ( type === 'decrement' ) {
		return {
			//quiet inconvenient
			counter : state.counter - amount , showCounter : state.showCounter
		}
	}

	if ( type === 'toggle' ) {
		return {
			//quiet inconvenient
			counter : state.counter , showCounter : !state.showCounter
		}
	}

	return state;
}


// $$$$$$ changes from
// const store = createStore ( counterReducer )
// $$$$$ changes to
// const store = createStore ( counterSlice.reducer )
// $$$$$ changes to
const store = configureStore ( {
	// must have single reducer
	reducer : counterSlice.reducer
	// if many,
	// reducer : { a: counterSlice.reducer, b: counterSlice.reducer...}
} )


//3. from other files and provide store to other file (firstly to index.js)
export default store;