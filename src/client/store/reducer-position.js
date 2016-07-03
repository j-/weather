import { combineReducers } from 'redux';

import {
	POSITION_FETCH,
	POSITION_SET,
	POSITION_ERROR,
} from './types';

const coord = (type) => (state = null, action) => {
	switch (action.type) {
		case POSITION_SET:
			return action[type];
		default:
			return state;
	}
};

const locationValid = (state = false, action) => {
	switch (action.type) {
		case POSITION_SET:
			return true;
		default:
			return state;
	}
};

const locationPending = (state = false, action) => {
	switch (action.type) {
		case POSITION_FETCH:
			return true;
		case POSITION_SET:
		case POSITION_ERROR:
			return false;
		default:
			return state;
	}
};

const locationError = (state = null, action) => {
	switch (action.type) {
		case POSITION_ERROR:
			return action.message;
		case POSITION_FETCH:
		case POSITION_SET:
			return null;
		default:
			return state;
	}
};

export default combineReducers({
	lat: coord('lat'),
	lon: coord('lon'),
	locationValid,
	locationPending,
	locationError,
});

export const getLatitude = (state) => state.lat;
export const getLongitude = (state) => state.lon;
export const isLocationValid = (state) => state.locationValid;
export const isLocationPending = (state) => state.locationPending;
export const getErrorMessage = (state) => state.locationError;
