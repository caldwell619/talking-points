// num of request sent per cycle
const numOfRequests = 1;
// number of seconds between each cycle
const intervalInSeconds = 5;
// interval duration in seconds
const intervalDuration = 5;
const axios = require('axios');
const createUser = require('./createUser');
const refreshToken = require('./refreshToken');
const associateCar = require('./associateCar');
const milesPerYear = 3332;
const yearsToOwn = 10;
const { institutionId, carId, baseUrl } = require('../keys');

const attackApi = async () => {
	const newUser = await createUser(institutionId);
	let { token } = newUser;
	const { userId, emailAddress } = newUser.user;
	// links car with user, quotes fail without link
	await associateCar(token, userId);

	let roundsOfAttacks = 0;

	const manageTokenState = (timer, numOfRequests, token) => {
		let mutableTimer = intervalDuration;
		const attack = setInterval(async () => {
			if (mutableTimer > 0) {
				executeRequestLoop(numOfRequests, token);
				mutableTimer--;
			} else {
				console.log(
					`Number of requests so far: ${numOfRequests * roundsOfAttacks}`
				);
				console.log('Refreshing token');
				clearInterval(attack);
				const refreshedToken = await refreshToken(emailAddress, userId, token);
				manageTokenState(intervalDuration, numOfRequests, refreshedToken.token);
			}
		}, intervalInSeconds * 1000);
	};
	const executeRequestLoop = (requests, currentToken) => {
		while (requests > 0) {
			axios({
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
			}).catch(() => {});
			roundsOfAttacks++;
			requests--;
		}
		console.log(`Round of Attack: ${roundsOfAttacks}`);
	};
	manageTokenState(intervalDuration, numOfRequests, token);
};

attackApi();
