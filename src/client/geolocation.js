const geolocation = typeof navigator !== 'undefined' && navigator.geolocation;

export const getCurrentPosition = () => (
	new Promise((resolve, reject) => (
		geolocation ?
			geolocation.getCurrentPosition(resolve, reject) :
			reject(new Error('Geolocation not supported'))
	))
);

export const getLatLonFromPosition = (position) => ({
	lat: position.coords.latitude,
	lon: position.coords.longitude,
});
