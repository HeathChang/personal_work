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
	const { quoteId } = params
	const { sendRequest, status, data : loadedComments, error } = useHttp(getAllComments);

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
		comments = <p className="centered"><LoadingSpinner/></p>
	} else if ( status === 'completed' && ( !loadedComments || loadedComments.length === 0 ) ) {
		comments = <p className="centered">No Comment .. </p>
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
				<p>{ comments }</p>
			</section>
	);
};

export default Comments;
