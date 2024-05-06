import PublicLayout from "../components/layouts/PublicLayout";
import Home from "../modules/home/Home";
import SignIn from "../modules/authentication/signin/SignIn";
import SignUP from "../modules/authentication/signup/SignUp";

const publicRoutes = [
	{
		path: "/",
		exact: true,
		layout: PublicLayout,
		element: <Home/>
	},
	{
		path: "/login",
		exact: true,
		layout: PublicLayout,
		element: <SignIn />
	},
	{
		path: "/signUp",
		exact: true,
		layout: PublicLayout,
		element: <SignUP />
	}
];
export default publicRoutes;
