import classes from "./css/index.module.css";
import { Fragment } from "react";
import { useRef, useState } from 'react';

const Memo = () => {
	const textInputRef = useRef();
	const [ textList, setTextList ] = useState(null);

	function fnInsertMemo() {
		console.log(112, textInputRef)

		let enteredText = textInputRef.current.value;
		setTextList(enteredText)
		textInputRef.current.value = ''
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
			<div>
				<ul>
					<li>
						{ textList }
					</li>
				</ul>
			</div>
		</div>
	</Fragment> )
}

export default Memo