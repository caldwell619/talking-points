'use strict';
const axios = require('axios');
const { baseUrl, password } = require('../keys');

const domains = ['com', 'live', 'net', 'org', 'gov', 'aswew'];
const emailAddress = `${Math.random() * 12}@${Math.floor(Math.random() * 1200)}.${
	domains[Math.floor(Math.random() * domains.length)]
}`;
const user = {
	emailAddress,
	password
};

module.exports = async (environment, institutionId) => {
	console.log('Attempting to register new user..\n');
	try {
		const createUserResponse = await axios.post(baseUrl, {
			...user
		});
		console.log('Successfully created user..\n');
		return createUserResponse.data;
	} catch (error) {
		console.log('Error creating user..');
		console.log('error: ', error);
	}
};
