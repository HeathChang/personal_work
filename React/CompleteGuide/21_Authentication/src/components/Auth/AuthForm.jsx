import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
	const [ isLogin, setIsLogin ] = useState(true);
	const emailInputRef = useRef()
	const passwordInputRef = useRef()
	const [ isLoading, setIsLoading ] = useState(false)

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("check ref:: ", emailInputRef.current.value, passwordInputRef.current.value);
		const enteredEmail = emailInputRef.current.value
		const enteredPassword = passwordInputRef.current.value

		//Loading starting
		setIsLoading(true)
		// validations skipped.
		if ( isLogin ) {

		} else {
			// Type 1
			// API-KEY => WEB-API Key in FireBase
			fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyGzfEiDXjI8i0i4hXT17Pw3r0oDIDIFA', {
				method : 'POST',
				body : JSON.stringify({
					email : enteredEmail,
					password : enteredPassword,
					returnSecureToken : true
				}),
				headers : {
					'Content-Type' : 'application/json'
				}
			}).then((res) => {
				setIsLoading(false)
				if ( res.ok ) {

				} else {
					// if Error..
					return res.json().then(data => {
						let errorMessage = 'Authentication failed'
						if ( data && data.error && data.error.message ) {
							errorMessage = data.error.message
						}
						alert(errorMessage)
					});
				}
			})

			// Type 2
			// fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyGzfEiDXjI8i0i4hXT17Pw3r0oDIDIFA', {
			// 	method : 'POST',
			// 	body : JSON.stringify({
			// 		email : enteredEmail,
			// 		password : enteredPassword,
			// 		returnSecureToken : true
			// 	}),
			// 	headers : {
			// 		'Content-Type': 'application/json'
			// 	}
			// })
		}

	}

	return (
			<section className={ classes.auth }>
				<h1>{ isLogin ? 'Login' : 'Sign Up' }</h1>
				<form onSubmit={ submitHandler }>
					<div className={ classes.control }>
						<label htmlFor='email'>Your Email</label>
						<input type='email' id='email' required ref={ emailInputRef }/>
					</div>
					<div className={ classes.control }>
						<label htmlFor='password'>Your Password</label>
						<input type='password' id='password' required ref={ passwordInputRef }/>
					</div>
					<div className={ classes.actions }>
						{ !isLoading && <button>{ isLogin ? 'Login' : 'Create Account' }</button> }
						{ isLoading && <p >Sending Request....</p> }
						<button
								type='button'
								className={ classes.toggle }
								onClick={ switchAuthModeHandler }
						>
							{ isLogin ? 'Create new account' : 'Login with existing account' }
						</button>
					</div>
				</form>
			</section>
	);
};

export default AuthForm;
