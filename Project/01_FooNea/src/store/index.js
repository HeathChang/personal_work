import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer : {
		memo : '',
		cart : ''
	},
});

export default store;