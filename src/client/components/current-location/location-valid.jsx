import React from 'react';
import Coordinates from '../coordinates';

const ValidLocation = ({ lat, lon }) => (
	<div className="location-valid">
		<strong>Coordinates</strong><br />
		<Coordinates
			lat={ lat }
			lon={ lon }
		/>
	</div>
);

export default ValidLocation;
