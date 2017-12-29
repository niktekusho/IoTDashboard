import React from 'react';

import Image from './image/Image';
import './ServiceStatusStyle.css';

const ServiceStatus = ({isOn, service}) => {
	const style = {
		backgroundColor: (isOn) ? 'green' : 'red',
	};

	return (
		<div className="card">
			<Image content={service} />
			<div className="container">
				<h4>{service}</h4>
				<div>Status: <div style={style} className="status"></div></div>
			</div>
		</div>
	);
};

export default ServiceStatus;
