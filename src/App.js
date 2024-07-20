import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react"; // Importa useEffect se non l'hai già fatto
import Modal from "react-modal";
import Home from "./components/Pages/Home";
import BookDetails from "./components/Pages/BookDetails";
import ErrorPage from "./components/Pages/ErrorPage";

const App = () => {
	//Messo qui per evitare che dia errore nella console
	useEffect(() => {
		Modal.setAppElement("#root");
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/book-details/:BookId" element={<BookDetails />} />

				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;