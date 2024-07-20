import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleShowComments,
	setSelectedBookAsin,
	selectShowComments,
} from "../Reduce/reduce";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"; // Importa il componente Link
import "./singleBook.css"; // Importa il file CSS

const SingleBook = ({ book: { title, category, asin, img, price } }) => {
	const dispatch = useDispatch();
	const showComments = useSelector(selectShowComments);

	const [commentsVisible, setCommentsVisible] = useState(false);

	const toggleComments = () => {
		setCommentsVisible(!commentsVisible);
		dispatch(toggleShowComments({ asin, show: !showComments[asin] }));
	};

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={img} alt={title} />
			<Card.Body>
				<Link to={`/book-details/${asin}`} className="link-style">
					<Card.Title>{title}</Card.Title>
				</Link>
				<Card.Text>Category: {category}</Card.Text>
				<Card.Text>ASIN: {asin}</Card.Text>
				<Card.Text>Price: ${price}</Card.Text>
				<button className="button1" onClick={toggleComments}>
					{showComments[asin]?.length > 0 ? "Hide Comments" : "Show Comments"}
				</button>
			</Card.Body>
		</Card>
	);
};

export default SingleBook;