'use strict';

module.exports = async (environment, institutionId) => {
	const axios = require('axios');
	const domains = ['com', 'live', 'net', 'org', 'gov', 'aswew'];
	const emailAddress = `${Math.random() * 12}@${Math.floor(
		Math.random() * 1200
	)}.${domains[Math.floor(Math.random() * domains.length)]}`;
	const { baseUrl, password } = require('../keys');
	const user = {
		emailAddress,
		password
	};
	console.log('Attempting to register new user..');
	try {
		const createUserResponse = await axios.post(baseUrl, {
			...user
		});
		console.log('Successfully created user..');
		return createUserResponse.data;
	} catch (error) {
		console.log('Error creating user..');
		console.log('error: ', error);
	}
};
