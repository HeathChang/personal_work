import { createStore } from 'redux';

const initialState = { counter : 0 , showCounter : true }

//1. CreateStore & reducer and  connect createStore to reducer
// const store = createStore()

//2. create reducer and mutates the state
const counterReducer = ( state = initialState , { type , amount = 1 } ) => {
	//receive action from component by dispatching
	if ( type === 'increment' ) {
		return {
			counter : state.counter + amount ,
			showCounter : state.showCounter
		}
	}
	if ( type === 'decrement' ) {
		return {
			counter : state.counter - amount ,
			showCounter : state.showCounter
		}
	}

	if ( type === 'toggle' ) {
		return {
			counter : state.counter ,
			showCounter : !state.showCounter
		}
	}

	return state;
}
const store = createStore ( counterReducer )

//3. from other files and provide store to other file (firstly to index.js)

export default store;