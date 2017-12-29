import React, { Component } from 'react';

import NoDevicesFound from '../common/NoDevicesFound';
import DeviceCard from '../common/card/DeviceCard';
import Image from '../common/image/Image';

import settings from '../../settings';

export default class DevicesPage extends Component {
	constructor(props) {
		super(props);
		this.url = `${settings.api.url}/devices/`;

		this.state = {
			devices: [],
		};
	}

	componentDidMount() {
		fetch(this.url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					devices: data,
				});
			});
	}

	render() {
		const devices = [];
		for (let device of this.state.devices) {
			const { deviceId, deviceClass, manufacturer, model, revision } = device;
			const deviceCard = (
				<DeviceCard deviceId='' service={deviceClass} key={deviceId} detail fixed>
					<Image content={deviceClass} width={50} height={50}/>
					<h3>
						{manufacturer}
					</h3>
					<p>
						Model: {model} rev: {revision}
					</p>
				</DeviceCard>
			);
			devices.push(deviceCard);
		}

		return (
			<div className="contentDiv">
				{devices.length === 0 ? <NoDevicesFound /> : devices}
			</div>
		);
	}
}
