import { connect } from 'react-redux';
import CurrentLocation from './location-current';

import {
	actions,
	isLocationValid,
	isLocationPending,
	getErrorMessage,
	getLatitude,
	getLongitude,
} from '../../store';

const mapStateToProps = (state) => ({
	isValid: isLocationValid(state),
	isPending: isLocationPending(state),
	errorMessage: getErrorMessage(state),
	lat: getLatitude(state),
	lon: getLongitude(state),
});

const CurrentLocationContainer = connect(
	mapStateToProps,
	actions
)(CurrentLocation);

export default CurrentLocationContainer;
