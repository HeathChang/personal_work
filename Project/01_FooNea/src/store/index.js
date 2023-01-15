import { configureStore } from '@reduxjs/toolkit';

import memoSlice from "./memo";

const store = configureStore({
	reducer : {
		memo : memoSlice.reducer,
	},
});

export default store;