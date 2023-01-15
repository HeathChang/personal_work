import { useSelector, useDispatch, connect } from 'react-redux'
import classes from './css/Auth.module.css';
import { authActionsCreator } from "../store";


const Auth = () => {
	const auth = useSelector((state) => {
		return state.auth.isAuth
	})
	const dispatch = useDispatch();

	const logInHandler = () => {
		dispatch(authActionsCreator.login())
	}



	return (
			<main className={ classes.auth }>
				<section>
					<form onSubmit={ event => event.preventDefault() }>
						<div className={ classes.control }>
							<label htmlFor='email'>Email</label>
							<input type='email' id='email'/>
						</div>
						<div className={ classes.control }>
							<label htmlFor='password'>Password</label>
							<input type='password' id='password'/>
						</div>
						<button onClick={ logInHandler }>Login</button>
					</form>
				</section>
			</main>
	);
};

export default Auth;
