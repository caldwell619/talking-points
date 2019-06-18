const express = require('express');
const app = express();
app.use(express.json());
require('./routeHandlers')(app);

const PORT = process.env.NODE_ENV === 'production' || 5000;
app.listen(PORT, () => {
	console.log('Skynet is Active');
});
