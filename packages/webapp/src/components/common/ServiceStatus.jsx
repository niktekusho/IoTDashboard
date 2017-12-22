import React from 'react';

import './ServiceStatusStyle.css';
import devicesLogo from './devices.png';
import lightingLogo from './lighting.png';
import settingsLogo from './settings.png';
import temperatureLogo from './temperature.png';

const ServiceStatus = ({isOn, service}) => {
	let image;
	switch(service.toLowerCase()) {
	case 'devices':
		image = devicesLogo;
		break;
	case 'lighting':
		image = lightingLogo;
		break;
	case 'user':
		image = settingsLogo;
		break;
	default:
		image = temperatureLogo;
	}

	const style = {
		backgroundColor: (isOn) ? 'green' : 'red',
	};

	return (
		<div className="card">
			<img src={image} />
			<div className="container">
				<h4>{service}</h4>
				<div>Status: <div style={style} className="status"></div></div>
			</div>
		</div>
	);
};

export default ServiceStatus;
