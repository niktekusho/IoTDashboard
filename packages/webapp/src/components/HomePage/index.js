import React, { Component } from 'react';

import ServiceStatus from '../common/ServiceStatus';

export default class HomePage extends Component {
	render() {
		const temperatureStatus = <ServiceStatus service='Temperature' color='#ebf1dd'/>
		const lightingStatus = <ServiceStatus service='Lighting' color='#e5e0ec'/>
		const devicesStatus = <ServiceStatus service='Devices' color='#dbeef3'/>
		const settingsStatus = <ServiceStatus service='Settings' color='#fdeada'/>
		return (
			<div>
				{temperatureStatus}
				{lightingStatus}
				{devicesStatus}
				{settingsStatus}
			</div>
		);
	}
}
