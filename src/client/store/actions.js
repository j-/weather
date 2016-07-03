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

export const requestLatLon = () => (dispatch) => {
	// No need for action creator
	dispatch({
		type: POSITION_FETCH,
	});
	// Prompt user for location data
	getCurrentPosition()
		.then((position) => {
			const coords = getLatLonFromPosition(position);
			dispatch(setLatLon(coords));
		})
		.catch((err) => {
			dispatch({
				type: POSITION_ERROR,
				message: err.message,
			});
		});
};
