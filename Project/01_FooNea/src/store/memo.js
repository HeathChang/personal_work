import { createSlice } from '@reduxjs/toolkit';
import { addMemo, fetchMemo } from '../firebase/api.js'

const memoSlice = createSlice({
	name : 'memo',
	initialState : {
		items : []
	},
	reducers : {
		fetchMemo : (state, action) => {
			console.log(action.payload.length)
			console.log(action.payload)
			for (let i in action.payload){
				console.log(action.payload[i])
				state.items.push({
					id: action.payload[i].id,
					memo: action.payload[i].memoContent
				})
			}
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