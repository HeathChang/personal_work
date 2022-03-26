import { useSelector , useDispatch , connect } from 'react-redux'
import classes from './css/Counter.module.css';


const Counter = () => {
	// 4. useSelector : automatically select the part of the state managed by store
	// 4-2. by using useSelector, Redux will automatically set up a subscription. so this will receive the latest counter automatically when data changes in Redux store.

	const counter = useSelector ( state => state.counter )

	// 5. dispatch: dispatch an action to the Redux store
	const dispatch = useDispatch ();
	const incrementDispatcher = () => {
		// 5.2 dispatch an action
		dispatch ( { type : 'increment' } )
	}
	const decrementDispatcher = () => {
		dispatch ( { type : 'decrement' } )
	}

	const toggleCounterHandler = () => {
	};
// 6. connect: wrapper around our class Component to connect that class component

	return (
			<main className={ classes.counter }>
				<h1>Redux Counter</h1>
				<div className={ classes.value }>{ counter }</div>
				<div>
					<button onClick={ incrementDispatcher }>Increment</button>
					<button onClick={ decrementDispatcher }>Decrement</button>
				</div>
				<button onClick={ toggleCounterHandler }>Toggle Counter</button>
			</main>
	);
};

export default Counter;
