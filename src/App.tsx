import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import PublicRoutes from "./routes/PublicRoutes";
import Landing from "./features/Landing/Landing";
import Chat from "./features/Chat/Chat";
import Register from "./features/Register/Register";
import PrivateRoutes from "./routes/PrivateRoutes";
import "./assets/styles/global.css";

function App() {
	const accessToken =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
	return (
		<Routes>
			<Route path={routes.LANDING} element={<Landing />} />
			<Route element={<PublicRoutes accessToken={accessToken} />}>
				<Route path={routes.REGISTER} element={<Register />} />
			</Route>
			<Route element={<PrivateRoutes accessToken={accessToken} />}>
				<Route path={routes.CHAT} element={<Chat />} />
			</Route>
		</Routes>
	);
}

export default App;
