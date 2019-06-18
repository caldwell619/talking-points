'use strict';

module.exports = async (emailAddress, userId, prevToken) => {
	const axios = require('axios');
	const { baseUrl } = require('../keys');
	try {
		const refreshResponse = await axios({
			method: 'get',
			url: `${baseUrl}/${userId}/refresh?emailAddress=${emailAddress}`,
			headers: {
				Authorization: prevToken
			}
		});
		return refreshResponse.data;
	} catch (error) {
		console.log('error: ', error);
	}
};
