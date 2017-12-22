import React, { Component } from 'react';

import ServiceStatus from '../common/ServiceStatus';

import settings from '../../settings';

export default class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			servicesStatus: {},
		};
	}

	componentDidMount() {
		fetch(settings.api.url).then(result => result.json()).then(data => {
			this.setState({ servicesStatus: data });
		});
	}

	render() {
		const temperature = this.state.servicesStatus.temperature;
		const user = this.state.servicesStatus.user;
		const lighting = this.state.servicesStatus.lighting;
		const devices = this.state.servicesStatus.devices;

		const temperatureStatus = <ServiceStatus service='Temperature' isOn={temperature}/>;
		const lightingStatus = <ServiceStatus service='Lighting' isOn={lighting}/>;
		const devicesStatus = <ServiceStatus service='Devices' isOn={devices}/>;
		const settingsStatus = <ServiceStatus service='Settings' isOn={user}/>;
		return (
			<div className="contentDiv">
				{temperatureStatus}
				{lightingStatus}
				{devicesStatus}
				{settingsStatus}
			</div>
		);
	}
}
