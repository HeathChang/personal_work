import classes from "./css/index.module.css";
import { useRef, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memoActions } from '../../store/memo';


const Memo = () => {
	//useSelector: 리덕스의 state를 조회할 수 있다.
	const memoItems = useSelector((state) => state.memo.items)
	const textInputRef = useRef();
	const dispatch = useDispatch();

	function fnInsertMemo() {
		console.log('memo check:: ', memoItems)
		let enteredText = textInputRef.current.value;
		const id = ( new Date().toISOString() )
		console.log(id)
		dispatch(
				memoActions.addMemo({
					id : id,
					memoContent : enteredText
				})
		)
		textInputRef.current.value = ''
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
										<li key={item.id}>
											<h6> { item.id }</h6>
											<div> { item.memoContent } </div>
										</li>
								)
							}) }
						</ul>
					</div>
				</div>
			</Fragment> )
}

export default Memo