import React, { Component } from 'react';

import settings from '../../settings';

import NoDevicesFound from '../common/NoDevicesFound';
import DeviceCard from '../common/card/DeviceCard';

export default class LightingPage extends Component {
	constructor(props) {
		super(props);
		this.url = `${settings.api.url}/lighting`;

		this.state = {
			lamps: [],
		};
	}

	componentDidMount() {
		fetch(`${this.url}/last`)
			.then(result => result.json())
			.then(data => {
				this.setState({
					lamps: data,
				});
			});
	}

	render() {
		const devices = [];
		for (let lightData of this.state.lamps) {
			const date = new Date(lightData.created_at);
			const device = (
				<DeviceCard deviceId={lightData.device} service='lighting' key={lightData.device}>
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
