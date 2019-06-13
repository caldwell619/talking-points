const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(proxy('/institution', { target: 'https://api.devmktapp.com' }));
};
