import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function capitalize(string) {
	if (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	return string;
}

const CardContainer = ({children, service, deviceId, detail, fixed}) => {
	const div = (
		<div className={fixed ? 'card-fixed' : 'card'}>
			{children}
		</div>
	);
	if (detail) {
		return div;
	}
	return (
		<Link to={`/${service}/${deviceId}`} className="card-link">
			{div}
		</Link>
	);
};

// service must be either: 'temperature', 'lighting' or 'device'
const DeviceCard = ({service, deviceId, children, detail, fixed}) => {
	const headerWriting = deviceId ? `: ${deviceId} ` : '';
	let header = <h4>{capitalize(service)} Device{headerWriting}</h4>;
	if (detail) {
		header = <h2>{capitalize(service)} Device{headerWriting}</h2>;
	}

	return (
		<CardContainer detail={detail} service={service} deviceId={deviceId} fixed={fixed}>
			{header}
			{children}
		</CardContainer>
	);
};

export default DeviceCard;
