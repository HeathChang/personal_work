import classes from "./css/index.module.css";
import { useRef, useState, useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memoActions } from '../../store/memo';
import { fetchMemo } from '../../firebase/api.js'


const Memo = () => {
	//useSelector: 리덕스의 state를 조회할 수 있다.
	const memoItems = useSelector((state) => state.memo.items)
	const textInputRef = useRef();
	const dispatch = useDispatch();


	useEffect(() => {
		// const a = dispatch(memoActions.fetchMemo())
		dispatch(memoActions.fetchMemo())
	}, [dispatch])

	// const fnFetchMemo = () => {
	// 	const data = dispatch(
	// 			memoActions.fetchMemo({})
	// 	)
	// 	console.log('check::', data)
	// }


	const fnInsertMemo = () => {
		let enteredText = textInputRef.current.value;
		const id = new Date().toLocaleString()
		dispatch(
				memoActions.addMemo({
					id : id,
					memoContent : enteredText
				})
		)
		textInputRef.current.value = ''
	}

	const fnRemoveMemo = (item) => {
		const { id } = item
		console.log(id)
		dispatch(
				memoActions.removeMemo({
					id : id
				})
		)
	}


	return (
			<Fragment>
				<h1 className={ classes.title }>
					Memo
				</h1>
				<div>
					<div className={ classes.title }>
						<textarea className={ classes.textarea } ref={ textInputRef } placeholder="insert memo" onKeyPress={ (e) => {
							if ( e.key === 'Enter' ) {
								fnInsertMemo()
							}
						} }/>
					</div>
					<div>
						<ul>
							{ memoItems.map((item) => {
								return (
										<li key={ item.id }>
											<h6> { item.id }</h6>
											<div> { item.memo } </div>
											<button className={ classes.button } onClick={ fnRemoveMemo.bind(null, item) }>Delete</button>
										</li>
								)
							}) }
						</ul>
					</div>
				</div>
			</Fragment> )
}

export default Memo