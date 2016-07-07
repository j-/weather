import React from 'react';
import RequestingLocation from './location-requesting';
import ValidLocation from './location-valid';
import InvalidLocation from './location-invalid';

const CurrentLocation = ({
	errorMessage,
	isPending,
	isValid,
	lat,
	lon,
	requestLocation,
}) => {
	if (isPending) {
		return <RequestingLocation />
	} else if (isValid) {
		return <ValidLocation lat={ lat } lon={ lon } />;
	} else {
		return <InvalidLocation
			message={ errorMessage }
			requestLocation={ requestLocation }
		/>
	}
};

export default CurrentLocation;
