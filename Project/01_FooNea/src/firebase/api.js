import { memoActions } from "../store/memo";

const FIREBASE_DOMAIN = 'https://foonea-21ee6-default-rtdb.firebaseio.com/'

export const fetchMemo = () => {
		return async (dispatch)=>{
			fetch(`${ FIREBASE_DOMAIN }/memo.json`, {
				method : 'GET',
				headers : {
					'Content-Type' : 'application/json',
				},
			}).then(response => {
				if ( response.status !== 200 ) {
					throw new Error('Could not fetch Memo')
				}
				return response.json()
			}).then(memo => {
				dispatch(memoActions.fetchMemo(memo))
			})
		}

// export const fetchMemo = async (dispatch) => {
// 	return await fetch(`${ FIREBASE_DOMAIN }/memo.json`, {
// 		method : 'GET',
// 		headers : {
// 			'Content-Type' : 'application/json',
// 		},
// 	}).then(response => {
// 		if ( response.status !== 200 ) {
// 			throw new Error('Could not fetch Memo')
// 		}
// 		return response.json()
// 	}).then((memo) => {
// 		console.log(123, memo)
// 		dispatch(memoActions.fetchMemo({
// 			id : memo.id,
// 			memo : memo.memoContent
// 		}))
// 	})
	// await dispatch(memoActions.fetchMemoList({
	// }))
	// console.log(123,memoData)
	// return memoData
}

export async function addMemo(params) {
	console.log(999, params)
	const response = await fetch(`${ FIREBASE_DOMAIN }/memo.json`, {
		method : 'POST',
		headers : {
			'Content-Type' : 'application/json',
		},
		body : JSON.stringify(params)
	})
	const data = await response.json();
	console.log(data)
}

export async function removeMemo() {

}
