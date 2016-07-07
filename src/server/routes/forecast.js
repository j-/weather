const express = require('express');
const app = express();
const Forecast = require('forecast-io');
const forecast = new Forecast(process.env.APIKEY);

app.get('/forecast/:nonce/:lat,:lon', (req, res) => {
	const lat = req.params.lat;
	const lon = req.params.lon;
	if (!lat || !lon) {
		throw new Error('Required fields `lat` and `lon` not found');
	}

	forecast
		.latitude(lat)
		.longitude(lon)
		.units('si')
		.get()
		.then((data) => res.send(data))
		.catch((err) => {
			throw err;
		});
});

module.exports = app;
