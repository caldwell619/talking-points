// express is a node frame work for making rest apis
const express = require('express');
const app = express();
app.use(express.json());
// these are my controllers, defined in a seaparate file
require('./routes/routeHandlers')(app);

// this pulls in my attack script
const attackApi = require('./setup/attack');

// initiates attack
setTimeout(() => {
	attackApi();
}, 1000);

// this starts the server listening for incoming http requests
// its also the equivalent of running the index.js file ie attackApi will be executed on sever launch
const PORT = process.env.NODE_ENV === 'production' || 5000;
app.listen(PORT, () => {
	console.log('Skynet is Active');
});
