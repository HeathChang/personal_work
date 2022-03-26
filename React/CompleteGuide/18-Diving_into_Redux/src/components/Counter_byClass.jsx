//using Class
import { Component } from 'react'

import {  connect } from 'react-redux'
import classes from './css/Counter.module.css';


class Counter extends Component {
	incrementDispatcher () {
		this.props.increment()
	}

	decrementDispatcher () {
		this.props.decrement()
	}

	toggleCounterHandler () {
	}

	render () {
		return (
				<main className={ classes.counter }>
					<h1>Redux Counter</h1>
					<div className={ classes.value }>{ this.props.counter }</div>
					<div>
						<button onClick={ this.incrementDispatcher.bind(this) }>Increment</button>
						<button onClick={ this.decrementDispatcher.bind(this) }>Decrement</button>
					</div>
					<button onClick={ this.toggleCounterHandler }>Toggle Counter</button>
				</main>
		);
	}
};

// Class based Component 는 hook을 사용하지 못하기 때문에, 다른 방법 사용해야됨.
// 뭉치기용
// connect also want two arguments
// 1. function that maps Redux state to props () (which will be received in this component then)
const mapStateToProps = ( state ) => {
	return {
		// a. key will be aval as props in receiving component
		// b. value is the logic for drilling into that Redux state
		counter : state.counter
	}
}
//보내기용
// 2. store dispatch functions in props so that in the counter component,
// we have certain props which we can execute as a function, which will then executes [dispatch an action] to the Redux store.
const mapDispatchToProps = ( dispatch ) => {
	return {
		// a. key: props name will
		// b. value: another function in which we call dispatch
		increment : () => {
			return dispatch ( { type : 'increment' } )
		},
		decrement : () => {
			return dispatch ( { type : 'decrement' } )
		},
	}

}

// 6. connect: wrapper around our class Component to connect that class component
// connect return a new function as a value and pass our component to that returned function as argument
export default connect (mapStateToProps, mapDispatchToProps) ( Counter );
