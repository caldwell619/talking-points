'use strict';
const baseURL =
	'https://api.qamktapp.com/institution/9a175661-f00d-4697-9b6e-f80bb4a06964/user';
const quotePath = '/c2d181bf-3c1f-4be1-892d-88b679abfe1d/quote';
const axios = require('axios');
const domains = ['com', 'live', 'net', 'org', 'gov', 'aswew'];

const emailAddress = `${Math.random() * 12}@${Math.floor(
	Math.random() * 1200
)}.${domains[Math.floor(Math.random() * domains.length)]}`;

const password = 'aP0(4c0w%$GkN!y49RgY5I"ip/255XiNl';

const user = {
	emailAddress,
	password
};

module.exports = createUser = async (
	user,
	attackFunction,
	numberOfRequests
) => {
	try {
		const createUserResponse = await axios.post(baseURL, {
			...user
		});
		return createUserResponse.data;
	} catch (error) {
		console.log('error: ', error);
	}
	attackFunction(numberOfRequests);
};
