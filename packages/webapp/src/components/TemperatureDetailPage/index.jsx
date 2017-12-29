import React, { Component } from 'react';

import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Legend, Tooltip } from 'recharts';

import './style.css';

import Loading from '../common/Loading';
import DeviceCard from '../common/card/DeviceCard';

import settings from '../../settings';

export default class TemperaturePage extends Component {
	constructor(props) {
		super(props);
		const { deviceId } = props.match.params;
		this.url = `${settings.api.url}/temperature/device/${deviceId}/last`;

		this.state = {
			temperatureDevice: {},
		};
	}

	componentDidMount() {
		fetch(this.url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					temperatureDevice: data,
				});
			});
	}

	render() {
		const {
			device,
			temperatures,
		} = this.state.temperatureDevice;

		return (
			<div className="contentDiv">
				{device ? (
					<div className="detail-card">

						<DeviceCard deviceId={device.deviceId} service='temperature' detail>
							<h3>Manufacturer: {device.manufacturer}</h3>
							<h3>Model: {device.model}</h3>
							<h3>Revision: {device.revision}</h3>
						</DeviceCard>
						<div className="graph-card">
							<h3>Last measurements</h3>
							<ResponsiveContainer height={500}>
								<LineChart data={temperatures} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
									<XAxis dataKey="created_at" tickFormatter={dateTick => new Date(dateTick).toLocaleTimeString()} name="Time"/>
									<YAxis unit={` °${temperatures[0].unit}`} name="Temperature"/>
									<Legend />
									<Tooltip />
									<CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
									<Line type="monotone" dataKey="temperature" stroke="#8884d8" />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>
				) : <Loading />}
			</div>
		);
	}
}
