import React from "react";
import SingleComment from "../SingleComment/SingleComment"; // Assicurati di utilizzare il percorso corretto per l'import

const CommentList = ({ reviews }) => {
	// Verifica che reviews sia un array, altrimenti assegna un array vuoto
	const reviewsArray = Array.isArray(reviews) ? reviews : [];

	return (
		<div>
			<h4>Recensioni:</h4>
			<ul>
				{reviewsArray.map((review) => (
					<li key={review._id}>
						<SingleComment review={review} />
						{/* Utilizza SingleComment per renderizzare ciascuna recensione */}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CommentList;