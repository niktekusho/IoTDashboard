import React, { Component } from 'react';

import settings from '../../settings';

export default class LightingPage extends Component {
	constructor(props) {
		super(props);
		this.url = `${settings.api.url}/temperature`;

		this.state = {
			temperatureDevices: new Map(),
		};
	}

	componentDidMount() {
		fetch(this.url)
			.then(result => result.json())
			.then(data => {
				const map = new Map();
				for (let temperatureData of data) {
					const { device, temperature, created_at } = temperatureData;
					map.set(device, { temperature, created_at });
				}
				this.setState({
					temperatureDevices: map,
				});
			});
	}

	render() {
		const devices = [];
		for (let [deviceId, temperatureData] of this.state.temperatureDevices) {
			// TODO add measure unit
			const date = new Date(temperatureData.created_at);
			const temperature = temperatureData.temperature.toFixed(1);
			const device = (
				<div className="card">
					<h4>{deviceId}</h4>
					<p>Temperature: {temperature} °C</p>
					<p>Last Measurement: {date.toLocaleString('it')}</p>
				</div>
			)
			devices.push(device);
		}

		return (
			<div>
				{devices}
			</div>
		);
	}
}
