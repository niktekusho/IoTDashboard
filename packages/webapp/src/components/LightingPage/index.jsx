import React, { Component } from 'react';

import settings from '../../settings';
import NoDevicesFound from '../common/NoDevicesFound';

import OnOffSwitch from '../common/OnOffSwitch';

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

	onSwitchHandler(deviceId) {
		fetch(`${this.url}/device/${deviceId}/switch`)
			.then(result => result.status === 200 ? console.log('yeah') : console.log('err'));
	}

	render() {
		const devices = [];
		let index = 0;
		for (let lightData of this.state.lamps) {
			// const date = new Date(lightData.created_at);
			// const isOn = lightData.state.isOn;
			// const deviceId = lightData.device;
			// const device = (
			// 	<div className="card" key={deviceId}>
			// 		<h4>{deviceId}</h4>
			// 		<OnOffSwitch isOn={isOn} deviceId={deviceId} onSwitch={(deviceId) => this.onSwitchHandler(deviceId)} />
			// 		<p>Last Measurement: {date.toLocaleString('it')}</p>
			// 	</div>
			// );
			const date = new Date(lightData.created_at);
			const device = (
				<div className="card" key={lightData.device}>
					<h4>Lamp {++index}</h4>
					<p>Last Measurement: {date.toLocaleString('it')}</p>
				</div>
			);
			devices.push(device);
		}

		return (
			<div>
				{devices.length === 0 ? <NoDevicesFound /> : devices}
			</div>
		);
	}
}
