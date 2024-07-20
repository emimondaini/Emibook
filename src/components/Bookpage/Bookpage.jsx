import SingleBook from "../SingleBook/SingleBook";
import CommentArea from "../CommentArea/CommentArea";
import "./Bookpage.css";

const BookPage = ({ book }) => {
	return (
		<div className="book-page">
			<div className="book-column">
				<h2>Ultimi libri</h2>
				<SingleBook book={book} />
			</div>
			<div className="comment-column">
				<h2>Comments</h2>
				<CommentArea book={book} />
			</div>
		</div>
	);
};

export default BookPage;