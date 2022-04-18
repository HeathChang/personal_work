import classes from "./css/index.module.css";
import { Fragment } from "react";

const test = () => {

	const fnInsertMemo = () => {
		console.log('Insert Memo')
	}

	return (
			<Fragment>
				<h1 className={ classes.title }>
					Memo
				</h1>
				<div>
					<ul>
						<li className={classes.list}>
							<textarea className={classes.textarea} placeholder="insert memo" onKeyPress={(e)=>{if(e.key ==='Enter'){ fnInsertMemo()}}}/>
						</li>
					</ul>
				</div>
			</Fragment>
	)
}

export default test