import React, { Component } from 'react';

import NoDevicesFound from '../common/NoDevicesFound';
import DeviceCard from '../common/card/DeviceCard';

import settings from '../../settings';

export default class TemperaturePage extends Component {
	constructor(props) {
		super(props);
		this.url = `${settings.api.url}/temperature/last`;

		this.state = {
			temperatureDevices: [],
		};
	}

	componentDidMount() {
		fetch(this.url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					temperatureDevices: data,
				});
			});
	}

	render() {
		const devices = [];
		for (let temperatureData of this.state.temperatureDevices) {
			const date = new Date(temperatureData.created_at);
			const temperature = temperatureData.temperature.toFixed(1);
			const deviceId = temperatureData.device;
			const device = (
				<DeviceCard deviceId={deviceId} service='temperature' key={deviceId}>
					<p>Temperature: {temperature} °{temperatureData.unit}</p>
					<p>Last Measurement: {date.toLocaleString('it')}</p>
				</DeviceCard>
			);
			devices.push(device);
		}

		return (
			<div className="contentDiv">
				{devices.length === 0 ? <NoDevicesFound /> : devices}
			</div>
		);
	}
}
