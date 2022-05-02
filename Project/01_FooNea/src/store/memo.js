import { createSlice } from '@reduxjs/toolkit';
import { addMemo, fetchMemo } from '../firebase/api.js'

const memoSlice = createSlice({
	name : 'memo',
	initialState : {
		items : []
	},
	reducers : {
		fetchMemo : async (state) =>{
			const memoData = await  fetchMemo()
			state.items.push({
				key: memoData.key,
				id : memoData.id,
				memoContent : memoData.memoContent
			})
			console.log(12, state.items)
		},
		addMemo(state, action) {
			addMemo(action.payload)
			const newMemo = action.payload;
			console.log('addMemo check::', state, action)
			state.items.push({
				id : newMemo.id,
				memoContent : newMemo.memoContent
			})
		},
		removeMemo(state, action) {
			console.log('remove action::', action)
			state.items = state.items.filter(item => item.id !== action.payload.id)
		}
	}
})
export const memoActions = memoSlice.actions;

export default memoSlice