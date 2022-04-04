import React, { useState } from "react";

const AuthContext = React.createContext({
	token : '',
	isLoggedIn : false,
	login : token => {
	},
	logout : () => {
	}
});

const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();
	return adjExpirationTime - currentTime
}

export const AuthContextProvider = (props) => {
	const initialToken = localStorage.getItem('token')
	const [ token, setToken ] = useState(initialToken)

	const userIsLoggedIn = !!token;

	const logoutHandler = () => {
		localStorage.removeItem('token')
		setToken(null)
	}

	const loginHandler = (token, expirationTime) => {
		setToken(token)
		localStorage.setItem('token', token)
		const remainingTime = calculateRemainingTime(expirationTime)
		//setting timer
		setTimeout(logoutHandler, remainingTime)
	}


	const contextValue = {
		token : token,
		isLoggedIn : userIsLoggedIn,
		login : loginHandler,
		logout : logoutHandler
	}

	return (
			<AuthContext.Provider value={ contextValue }>
				{ props.children }
			</AuthContext.Provider>
	);
}


export default AuthContext