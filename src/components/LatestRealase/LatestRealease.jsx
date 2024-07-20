// Questo componente rappresenta la pagina degli ultimi rilasci dei libri.
// Utilizza Redux per gestire lo stato dei libri e delle azioni.

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, selectBooks } from "../Reduce/reduce";
import BookPage from "../Bookpage/Bookpage";

const LatestRelease = () => {
	const dispatch = useDispatch(); // Inizializza la funzione di dispatch di Redux
	const books = useSelector(selectBooks); // Ottieni lo stato dei libri utilizzando il selettore di Redux

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://epibooks.onrender.com/"); // Effettua la richiesta GET al server
				if (!response.ok) {
					throw new Error("Errore nella richiesta al server");
				}
				const data = await response.json(); // Estrai i dati JSON dalla risposta

				// Adesso puoi inviare i dati al tuo store Redux utilizzando l'azione 'setBooks'
				dispatch(setBooks(data));

				// Questo aggiornerà lo stato dei libri nel tuo store Redux con i dati ottenuti dal server.
			} catch (error) {
				console.error("Errore durante il recupero dei dati:", error);
			}
		};

		fetchData(); // Chiama la funzione fetchData per ottenere i dati dal server quando il componente si monta
	}, [dispatch]);

	return (
		<div>
			<div>
				{books.map((book, index) => (
					<div key={`${book.asin}-${index}`}>
						<BookPage book={book} />
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestRelease; // Esporta il componente LatestRelease

//Il componente LatestRelease è una funzione React che rappresenta la pagina degli ultimi rilasci dei libri,
// Utilizza hook di Redux come useDispatch e useSelector per accedere allo stato Redux e alle azioni.
//Nell'effetto useEffect, quando il componente si monta, viene eseguita una richiesta API a "https://epibooks.onrender.com" per ottenere dati sui libri più recenti.
//I dati ottenuti dalla richiesta API vengono convertiti in formato JSON e memorizzati nello stato Redux utilizzando l'azione setBooks e la funzione di dispatch dispatch.
//I dati ottenuti vengono anche stampati nella console per scopi di debug.
//Nella parte di rendering, viene visualizzata una lista di libri mappando l'array books e creando un componente BookPage per