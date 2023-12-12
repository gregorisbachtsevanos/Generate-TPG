import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ accessToken }: { accessToken: string }) => {
	console.log(accessToken);
	return accessToken ? <Outlet /> : <Navigate to="/me" />;
};

export default PrivateRoutes;
