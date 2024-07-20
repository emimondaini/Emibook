import { configureStore, createSlice } from "@reduxjs/toolkit";

// Creazione dello slice per i libri
const booksSlice = createSlice({
	name: "books",
	initialState: {
		books: [], // Array contenente i dati dei libri
		showComments: {}, // Oggetto per tracciare lo stato dei commenti visualizzati
		reviews: [], // Array contenente le recensioni
		selectedBookAsin: null, // ASIN del libro selezionato
	},
	reducers: {
		// Azione per impostare i dati dei libri nello stato
		setBooks: (state, action) => {
			state.books = action.payload;
		},
		// Azione per mostrare/nascondere i commenti di un libro
		toggleShowComments: (state, action) => {
			const { asin, show } = action.payload;
			state.showComments[asin] = show;
		},
		// Azione per impostare le recensioni nello stato
		setReviews: (state, action) => {
			state.reviews = action.payload;
		},
		// Azione per impostare l'ASIN del libro selezionato
		setSelectedBookAsin: (state, action) => {
			state.selectedBookAsin = action.payload;
		},
	},
});

// Export delle azioni e dei selettori
export const { setBooks, toggleShowComments, setReviews, setSelectedBookAsin } =
	booksSlice.actions;

// Selettori per ottenere i dati dallo stato
export const selectBooks = (state) => state.books.books;
export const selectShowComments = (state) => state.books.showComments;
export const selectReviews = (state) => state.books.reviews;
export const selectSelectedBookAsin = (state) => state.books.selectedBookAsin;

// Configurazione del negozio Redux
const store = configureStore({
	reducer: {
		books: booksSlice.reducer,
	},
});

export { store };