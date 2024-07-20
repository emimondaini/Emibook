import React from "react";
import "./singleComment.css"; // Importa il file CSS

const SingleComment = ({ review }) => {
	return (
		<div className="single-comment-container">
			<p>Autore: {review.author}</p>
			<p>Commento: {review.comment}</p>
			<p>Rate: {review.rate}</p>
			<p>Data di creazione: {review.createdAt}</p>
		</div>
	);
};

export default SingleComment;