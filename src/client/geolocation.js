const geolocation = navigator.geolocation;

export const getCurrentPosition = () => (
	new Promise((resolve, reject) => (
		geolocation.getCurrentPosition(resolve, reject)
	))
);

export const getLatLonFromPosition = (position) => ({
	lat: position.coords.latitude,
	lon: position.coords.longitude,
});
