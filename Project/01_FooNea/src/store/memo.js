import { createSlice } from '@reduxjs/toolkit';

const memoSlice = createSlice({
	name : 'memo',
	initialState : {
		items : []
	},

	reducers : {
		addMemo(state, action) {
			const newMemo = action.payload;
			console.log('addMemo check::', state, action)
			// console.log
			// state.item = [ ...state.items, {
			// 	id : newMemo.id,
			// 	memoContent : newMemo.memoContent
			// } ]
			state.items.push({
				id : newMemo.id,
				memoContent : newMemo.memoContent
			})
		},
		removeMemo(state, action) {
			state.items = state.items.filter(item => item.id !== action.payload.id)
		}
	}
})
export const memoActions = memoSlice.actions;

export default memoSlice