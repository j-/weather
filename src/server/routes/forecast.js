const express = require('express');
const app = express();
const request = require('request');

const APIKEY = process.env.APIKEY;

app.get('/forecast/:nonce/:lat,:lon', (req, res) => {
	if (!APIKEY) {
		throw new Error('API key was not found');
	}

	const lat = req.params.lat;
	const lon = req.params.lon;
	if (!lat || !lon) {
		throw new Error('Required fields `lat` and `lon` not found');
	}

	request.get(
		`https://api.forecast.io/forecast/${APIKEY}/${lat},${lon}`
	).pipe(res);
});

module.exports = app;
