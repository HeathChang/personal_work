import { memoActions } from "../store/memo";

const FIREBASE_DOMAIN = 'https://foonea-21ee6-default-rtdb.firebaseio.com/'

export const fetchMemo = () => {
	return async (dispatch) => {
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
}

export const addMemo = (params) => {
	return async (dispatch) => {
		fetch(`${ FIREBASE_DOMAIN }/memo.json`, {
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json',
			},
			body : JSON.stringify(params)
		}).then(response => {
			if ( response.status !== 200 ) {
				throw new Error('Could not fetch Memo')
			}
			dispatch(memoActions.addMemo(params))
		}).then(() => {
			window.location.reload()
		})
	}
}

export const removeMemo = (params) => {
	return async (dispatch) => {
		fetch(`${ FIREBASE_DOMAIN }/memo.json`, {
			method : 'DELETE',
			headers : {
				'Content-Type' : 'application/json',
			},
			body : JSON.stringify(params.id)
		}).then(response => {
			if ( response.status !== 200 ) {
				throw new Error('Could not delete Memo')
			}
			dispatch(memoActions.removeMemo(params))
		}).then(() => {
			window.location.reload()
		})
	}
}
