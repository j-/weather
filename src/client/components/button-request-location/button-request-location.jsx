import React from 'react';

const ButtonRequestLocation = ({ requestLocation }) => (
	<button type="button" onClick={ requestLocation }>
		Get current location
	</button>
);

export default ButtonRequestLocation;
