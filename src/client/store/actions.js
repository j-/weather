import {
	POSITION_FETCH,
	POSITION_SET,
	POSITION_ERROR,
} from './types';

import {
	getCurrentPosition,
	getLatLonFromPosition,
} from '../geolocation';

export const setLatLon = ({ lat, lon }) => ({
	type: POSITION_SET,
	lat,
	lon,
});

export const notifyFetch = () => ({
	type: POSITION_FETCH,
});

export const notifyError = (message = 'An unknown error occurred') => ({
	type: POSITION_ERROR,
	message,
});

export const requestLatLon = () => (dispatch) => {
	// Notify app that location is being requested
	dispatch(notifyFetch());
	// Prompt user for location data
	getCurrentPosition()
		.then((position) => {
			const coords = getLatLonFromPosition(position);
			dispatch(setLatLon(coords));
		})
		.catch((err) => {
			dispatch(notifyError(err.message));
		});
};
