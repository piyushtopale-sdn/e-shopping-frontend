import PrivateLayout from "../components/layouts/PrivateLayout";

const privateRoutes = [
	{
		path: "/dashboard",
		exact: true,
		layout: PrivateLayout,
		element: <div>Dashboard Page</div>
	}
];
export default privateRoutes;
