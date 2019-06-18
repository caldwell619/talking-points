'use strict';

module.exports = async (token, userId) => {
	const axios = require('axios');
	const { baseUrl, vin } = require('../keys');
	const targetUrl = `${baseUrl}/${userId}/car`;
	const flags = {
		commercialUse: false,
		certifiedPreowned: false,
		secondOwner: false,
		hasLiftKitOrOversizeTires: false,
		modifiedVehicle: false,
		isSalvageTitle: false
	};
	const odometer = 10000;
	console.log('Attempting to associate car with user..');
	axios({
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
	})
		.then(res => {
			console.log('Successfully associated car..');
		})
		.catch(error => {
			console.log('error: \n\n\n', error);
		});
};
