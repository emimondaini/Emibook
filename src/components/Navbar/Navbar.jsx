import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../Reduce/reduce";
import { selectBooks } from "../Reduce/reduce";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	const dispatch = useDispatch();
	const originalBooks = useSelector(selectBooks); // Salva una copia degli originali libri
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredBooks, setFilteredBooks] = useState(originalBooks);

	const handleSearch = (value) => {
		const filtered = originalBooks.filter((book) =>
			book.title.toLowerCase().includes(value.toLowerCase())
		);
		// Aggiorna lo stato dei libri filtrati
		setFilteredBooks(filtered);
	};

	// Gestisci la modifica del campo di ricerca
	const handleChange = (e) => {
		const value = e.target.value;
		setSearchTerm(value);

		// Esegui la ricerca ad ogni modifica
		handleSearch(value);
	};

	// Aggiorna lo stato dei libri nel Redux con i libri filtrati

	// Effettua una nuova richiesta al server quando la barra di ricerca è vuota
	useEffect(() => {
		const shouldFetchData =
			searchTerm.trim() === "" && originalBooks.length <= 100;
		dispatch(setBooks(filteredBooks));
		if (shouldFetchData) {
			// Esegui una nuova richiesta al server per ottenere tutti i libri
			const fetchData = async () => {
				try {
					const response = await fetch("https://epibooks.onrender.com/");
					if (!response.ok) {
						throw new Error("Errore nella richiesta al server");
					}
					const data = await response.json();
					// Aggiorna il filtro dei libri con i nuovi dati dal server
					setFilteredBooks(data);
				} catch (error) {
					console.error("Errore durante il recupero dei dati:", error);
				}
			};

			fetchData();
		}
	}, [searchTerm, filteredBooks, dispatch]);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<div className="navbar-nav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active ml-0">
							<Link to="/" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
					</ul>
					<div className="ml-auto">
						<input
							type="text"
							placeholder="Cerca libri..."
							value={searchTerm}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;