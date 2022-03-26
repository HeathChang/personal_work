import { createStore } from 'redux';

//1. CreateStore & reducer and  connect createStore to reducer
// const store = createStore()

//2. create reducer and mutates the state
const counterReducer = ( state = { counter : 0 } , action ) => {
	//receive action from component by dispatching
	if ( action.type === 'increment' ) {
		return {
			counter : state.counter + 1
		}
	}
	if ( action.type === 'decrement' ) {
		return {
			counter : state.counter - 1
		}
	}
	return state;
}
const store = createStore ( counterReducer )

//3. from other files and provide store to other file (firstly to index.js)

export default store;