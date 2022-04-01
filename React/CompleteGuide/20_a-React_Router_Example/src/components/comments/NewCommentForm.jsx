import { useRef, useEffect } from 'react';
import { addComment } from '../../lib/api.js'
import useHttp from '../../hooks/use-http'
import classes from './NewCommentForm.module.css';
import useHttps from "../../hooks/use-http";
import { useHistory, useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
	const commentTextRef = useRef();
	const { sendRequest, status, error } = useHttps(addComment);
	const history = useHistory();

	const { onAddedComment } = props
	useEffect(() => {
		if ( status === 'completed' && !error ) {
			onAddedComment();
			// history.replace(`/quotes/${ params.quoteId }`)
		}
	}, [ status, error, onAddedComment ])
	const submitFormHandler = (event) => {
		event.preventDefault();
		const enteredText = commentTextRef.current.value
		sendRequest({ commentData : { text : enteredText }, quoteId : props.quoteId })
		// send comment to server
	};

	return (
			<form className={ classes.form } onSubmit={ submitFormHandler }>
				{ status === 'pending' && <p className='centered'><LoadingSpinner/></p> }
				<div className={ classes.control } onSubmit={ submitFormHandler }>
					<label htmlFor='comment'>Your Comment</label>
					<textarea id='comment' rows='5' ref={ commentTextRef }></textarea>
				</div>
				<div className={ classes.actions }>
					<button className='btn'>Add Comment</button>
				</div>
			</form>
	);
};

export default NewCommentForm;
