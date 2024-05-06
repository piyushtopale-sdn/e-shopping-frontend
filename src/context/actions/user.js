import ApiClient from "../../api-client";
import {API_URL} from "../../environment";

const user_signin = (data, callback) => {
	return (dispatch) => {
		dispatch({ type: "ISLOADING", data: true });
		ApiClient.post(`${API_URL}/users/web/v1/signin`, data, null, dispatch).then(
			(response) => {
				dispatch({ type: "ISLOAresponseDING", data: false });
				if (response.statusCode === 200) {
					return callback(response);
				} else {
					return callback(response);
				}
			}
		);
	};
};

const user_signout = () => {
	return (dispatch, getState) => {
		const { user: { token }} = getState();
		ApiClient.post(`${API_URL}/user/signout`, {}, `${token}`, null).then(
			() => {}
		);
	};
};

const user_signup = (data, callback) => {
	return (dispatch) => {
		dispatch({ type: "ISLOADING", data: true });
		ApiClient.post(`${API_URL}/user/user`, data, null, null).then((response) => {
			dispatch({ type: "ISLOADING", data: false });
			if (response.statusCode === 200) {
				return callback(response);
			} else if (response.statusCode === 404) {
				return callback(response);
			} else {
				return callback(response);
			}
		});
	};
};

const reset_password = (data, callback) => {
	return (dispatch) => {
		dispatch({ type: "ISLOADING", data: true });
		ApiClient.post(`${API_URL}/user/forgotPassword`, data, null, dispatch).then(
			(response) => {
				dispatch({ type: "ISLOADING", data: false });
				if (response.statusCode === 200) {
					if (response) return callback(response);
				} else if (response.statusCode === 404) {
					// toast.warn(response.message, toast_warning);
					return callback(response);
				} else {
					// toast.error(response.message, toast_error);
					return callback(response);
				}
			}
		);
	};
};

const get_insta_token = (data, callback) => {
	return (dispatch, getState) => {
		dispatch({ type: "ISLOADING", data: true });
		const { user: { token }} = getState();
		ApiClient.post(`${API_URL}/users/web/v1/getInstagramToken`, data,`${token}`, null, dispatch).then(
			(response) => {
				dispatch({ type: "ISLOADING", data: false });
				if (response.statusCode === 200) {
					if (response) return callback(response);
				} else if (response.statusCode === 404) {
					// toast.warn(resporesponsense.message, toast_warning);
					return callback(response);
				} else {
					// toast.error(response.message, toast_error);
					return callback(response);
				}
			}
		);
	};
};

export { 
	user_signin,
	user_signup,
	user_signout,
	reset_password,
	get_insta_token
};