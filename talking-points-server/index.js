const express = require('express');
const app = express();
const axios = require('axios');

app.get('/institution/test', async (req, res) => {
	try {
		const responseApi = await axios.get(
			'https://api.devmktapp.com/institution/9a175661-f00d-4697-9b6e-f80bb4a06964/'
		);
		console.log(responseApi);
		res.send('Uhhhh');
	} catch (error) {
		res.send(error);
	}
});
app.get('/test', (req, res) => {
	console.log(Math.random() * 10);
	res.send('hey');
});

const PORT = process.env.NODE_ENV === 'production' || 5000;
app.listen(PORT, () => {
	console.log('Skynet is Active');
});
