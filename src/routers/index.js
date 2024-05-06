import publicRoutes from "./PublicRoutes";
import privateRoutes from "./PrivateRoutes";
import { createBrowserRouter} from "react-router-dom";

const routers = createBrowserRouter([
	...publicRoutes,
	...privateRoutes,
]);

export default routers;	 