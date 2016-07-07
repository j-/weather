import React from 'react';
import ButtonRequestLocation from '../button-request-location';

const InvalidLocation = ({
	requestLocation,
	message = 'Unknown location',
}) => (
	<div className="location-invalid">
		<label>{ message }</label><br />
		<ButtonRequestLocation requestLocation={ requestLocation } />
	</div>
);

export default InvalidLocation;
