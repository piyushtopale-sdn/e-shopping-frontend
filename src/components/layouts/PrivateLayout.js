/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PrivateLayout = ({ children }) => {
	let { token, user } = useSelector(state => state.user);
	console.log("userRedux",user)
	// let localToken = localStorage.getItem("token")
	let navigate = useNavigate();
	useEffect(() => {
		if (!token || !user) {
			navigate("/login");  
		}
	});
	return (
		<>
			{token ? children : null}
		</>
	);
};

export default PrivateLayout;
