'use strict';
const axios = require('axios');
// pulls the potentially sensitive info into the file
// the same practice is used for api keys, passwords, etc
const { baseUrl, vin } = require('../keys');
// needed for the company api
const flags = {
	commercialUse: false,
	certifiedPreowned: false,
	secondOwner: false,
	hasLiftKitOrOversizeTires: false,
	modifiedVehicle: false,
	isSalvageTitle: false
};
const odometer = 10000;

module.exports = async (token, userId) => {
	setTimeout(() => {
		console.log('Attempting to associate car with user..\n');
	}, 100);
	const targetUrl = `${baseUrl}/${userId}/car`;
	const options = {
		method: 'post',
		url: targetUrl,
		// this is how the api knows I'm "legit" lol
		headers: {
			Authorization: token
		},
		data: {
			vin,
			flags,
			odometer
		}
	};
	// sending an http request with the above configuration
	axios(options)
		.then(res => {
			console.log('Successfully associated car..\n');
			console.log('Beginning attack..\n');
		})
		.catch(error => {
			console.log('error: \n\n\n', error);
			process.exit(1);
		});
};
