const FIREBASE_DOMAIN = 'https://foonea-21ee6-default-rtdb.firebaseio.com/'


export async function fetchMemo() {
	const response = await fetch(`${ FIREBASE_DOMAIN }/memo.json`, {
		method : 'GET',
		headers : {
			'Content-Type' : 'application/json',
		},
	})
	let memoData = []
	const data = await response.json()
	for (const item in data){
		const memoObj = {
			id: data[item].id,
			memo: data[item].memoContent
		}
		memoData = [...memoData, memoObj]
	}
	return memoData
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
