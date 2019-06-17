const axios = require('axios');
const numOfRequests = 10000;
const getToken = require('./getToken');

const go = requests => {
	while (requests > 0) {
		axios.get('http://localhost:5000/test').catch(() => {});
		requests--;
	}
	console.log('iteration');
};

const start = numOfRequests => {
	let timer = 5; // seconds
	const attack = setInterval(() => {
		if (timer > 0) {
			go(numOfRequests);
			timer--;
		} else {
			console.log('get token');
			clearInterval(attack);
			start(numOfRequests);
		}
	}, 1000);
};

start(numOfRequests);
