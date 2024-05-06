import "./App.css";
import routers from "./routers";
import {RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast_config } from "./utils/constants";
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<RouterProvider router={routers} />
			<ToastContainer {...toast_config} />
		</Fragment>
	);
}

export default App;
