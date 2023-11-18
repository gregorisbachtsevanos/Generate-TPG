import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ accessToken }: { accessToken: string }) => {
	console.log(accessToken);
	return accessToken ? <Outlet /> : <Navigate to="/chat" />;
};

export default PublicRoutes;
