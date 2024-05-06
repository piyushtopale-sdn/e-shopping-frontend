import axios from "axios";

let config = {
	headers: {
		"Content-Type": "application/json"
	}
};

let langHeaders = () => {
	return { headers: { ...config.headers, "referrermodule": window.location.href } };

};

const logout = (error, dispatch) => {
	if (dispatch && error?.response?.data?.statusCode === 403) {
	} else if (dispatch && error?.response?.data?.statusCode === 405) {
	} else if (dispatch && error?.response?.data?.statusCode === 406) {
	}
};

const setAuthorizationToken = (axios, token) => {
	if (token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common.Authorization;
	}
};

class ApiClient {
	static post(url, params, token = null, dispatch = null) {
		setAuthorizationToken(axios, token);
		return new Promise((fulfill, reject) => {
			axios.post(url, JSON.stringify(params), langHeaders())
				.then(function (response) {
					fulfill(response.data);
				})
				.catch(function (error) {
					if (error?.response) {
						fulfill(error.response.data);
						setTimeout(() => {
							logout(error, dispatch);
						}, 1000);
					} else {
						reject(error);
					}
				});
		});
	}

	static put(url, params, token = null, dispatch = null) {
		setAuthorizationToken(axios, token);
		return new Promise(function (fulfill, reject) {
			axios
				.put(url, JSON.stringify(params), langHeaders())
				.then(function (response) {
					fulfill(response.data);
				})
				.catch(function (error) {
					if (error?.response) {
						fulfill(error.response.data);
						setTimeout(() => {
							logout(error, dispatch);
						}, 1000);
					} else {
						reject(error);
					}
				});
		});
	}

	static get(url, params, token = null, dispatch = null) {
		setAuthorizationToken(axios, token);
		// let query = querystring.stringify(params);
		let query = null;
		url = query ? `${url}?${query}` : url;
		return new Promise(function (fulfill, reject) {
			axios
				.get(url, langHeaders())
				.then(function (response) {
					fulfill(response.data);
				})
				.catch(function (error) {
					if (error?.response) {
						fulfill(error.response.data);
						setTimeout(() => {
							logout(error, dispatch);
						}, 1000);
					} else {
						reject(error);
					}
				});
		});
	}

	static delete(url, params, token = null, dispatch = null) {
		setAuthorizationToken(axios, token);
		return new Promise(function (fulfill, reject) {
			axios
				.delete(url, { data: params }, langHeaders())
				.then(function (response) {
					fulfill(response.data);
				})
				.catch(function (error) {
					if (error?.response) {
						fulfill(error.response.data);
						setTimeout(() => {
							logout(error, dispatch);
						}, 1000);
					} else {
						reject(error);
					}
				});
		});
	}
}

export default ApiClient;
