/* eslint-disable no-undef */

//For local setup 
const local = {
	API_URL: "" 
};

//For staging server
const staging = {
	API_URL: ""
};

if (process.env.REACT_APP_ENV === "local") module.exports = local;
else if (process.env.REACT_APP_ENV === "staging") module.exports = staging;
else module.exports = local;
