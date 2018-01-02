import React from 'react';

import './NoDevicesFoundStyle.css';

const NoDevicesFound = () => {
	return (
		<div className="noDevicesFound">
			<h3>None of your devices have been connected.</h3>
			<p>Try again or connect a device</p>
		</div>
	);
};

export default NoDevicesFound;
