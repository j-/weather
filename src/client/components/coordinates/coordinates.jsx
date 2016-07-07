import React from 'react';

const Coordinates = ({ lat, lon }) => (
	<div className="coordinates">
		<em>{ lat }</em>
		{ ', ' }
		<em>{ lon }</em>
	</div>
);

export default Coordinates;
