import { useCallback, useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from '../../lib/api'
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
	const [ isAddingComment, setIsAddingComment ] = useState(false);
	const params = useParams()
	console.log('params check:: ', params)
	const { quoteId } = params
	const { sendRequest, status, data : loadedComments } = useHttp(getAllComments);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};
	useState(() => {
		sendRequest(quoteId)
	}, [ quoteId ])

	const addedCommentHandler = useCallback(() => {
		sendRequest(quoteId)
	}, [ sendRequest, quoteId ])

	let comments;
	if ( status === 'pending' ) {
		comments = <div className="centered"><LoadingSpinner/></div>
	} else if ( status === 'completed' && ( !loadedComments || loadedComments.length === 0 ) ) {
		comments = <div className="centered">No Comment .. </div>
	} else if ( status === 'completed' ) {
		comments = <CommentsList comments={ loadedComments }/>
	}
	return (
			<section className={ classes.comments }>
				<h2>User Comments</h2>
				{ !isAddingComment && (
						<button className='btn' onClick={ startAddCommentHandler }>
							Add a Comment
						</button>
				) }
				{ isAddingComment && <NewCommentForm quoteId={ quoteId } onAddedComment={ addedCommentHandler }/> }
				<div>{ comments }</div>
			</section>
	);
};

export default Comments;
