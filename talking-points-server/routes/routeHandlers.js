module.exports = app => {
	app.post('/test', (req, res) => {
		console.log(req.body);
		res.send('hey');
	});
};
