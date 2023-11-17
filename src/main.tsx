import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./assets/styles/theme.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={defaultTheme}>
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>
);
