import { combineReducers } from 'redux';
import * as actions from './actions';
import positionReducer, * as position from './reducer-position';

export default combineReducers({
	position: positionReducer,
});

export { actions };

export const getLatitude = (state) => position.getLatitude(state.position);
export const getLongitude = (state) => position.getLongitude(state.position);
export const isLocationValid = (state) => position.isLocationValid(state.position);
export const isLocationPending = (state) => position.isLocationPending(state.position);
export const getErrorMessage = (state) => position.getErrorMessage(state.position);
