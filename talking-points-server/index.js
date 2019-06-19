const express = require('express');
const app = express();
app.use(express.json());
require('./routes/routeHandlers')(app);

const attackApi = require('./setup/attack');

// initiates attack
setTimeout(() => {
	attackApi();
}, 1000);

const PORT = process.env.NODE_ENV === 'production' || 5000;
app.listen(PORT, () => {
	console.log('Skynet is Active');
});
