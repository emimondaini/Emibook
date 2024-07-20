import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot da "react-dom/client"
import { Provider } from "react-redux"; // Importa Provider
import { store } from "./components/Reduce/reduce"; // Importa il tuo store Redux
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);