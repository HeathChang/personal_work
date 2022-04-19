import classes from "./css/index.module.css";
import { Fragment } from "react";
import { useRef, useState } from 'react';

const Memo = () => {
	const textInputRef = useRef();

	function fnInsertMemo() {
		console.log(112, textInputRef)
		const enteredText = textInputRef.current.value;
	}

	return ( <Fragment>
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
		</div>
	</Fragment> )
}

export default Memo