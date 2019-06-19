'use strict';
const axios = require('axios');
const { baseUrl, vin } = require('../keys');
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
		headers: {
			Authorization: token
		},
		data: {
			vin,
			flags,
			odometer
		}
	};
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
