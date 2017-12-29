import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Legend, Tooltip } from 'recharts';

import settings from '../../settings';

import NoDevicesFound from '../common/NoDevicesFound';
import DeviceCard from '../common/card/DeviceCard';
import OnOffSwitch from '../common/OnOffSwitch';

export default class LightingDetailPage extends Component {
	constructor(props) {
		super(props);
		const { deviceId } = props.match.params;
		this.deviceId = deviceId;
		this.url = `${settings.api.url}/lighting`;

		this.state = {
			lamp: {},
			isOn: false,
		};

		this.onSwitchHandler = this.onSwitchHandler.bind(this);
	}

	componentDidMount() {
		fetch(`${this.url}/device/${this.deviceId}/last`)
			.then(result => result.json())
			.then(data => {
				const { readings } = data;
				const lastReading = readings[readings.length - 1];
				const isOn = lastReading.state.isOn;
				this.setState({
					lamp: data,
					isOn: isOn,
				});
			});
	}

	onSwitchHandler(event) {
		// https://reactjs.org/docs/events.html#event-pooling
		event.persist();
		const switchedState = event.target.checked;
		fetch(`${this.url}/device/${this.deviceId}/switch`)
			.then((result) => {
				if (result.status === 200) {
					this.setState({
						isOn: switchedState,
					});
					toast.success('Lamp state switched');
				} else {
					toast.error('Could not switch lamp state! Check log for details.');
					event.preventDefault();
					console.error(result.body); // eslint-disable-line
				}
			});
	}

	renderCard() {
		const { device, readings } = this.state.lamp;
		const lastReading = readings[readings.length - 1];
		return (
			<div className='detail-card'>
				<DeviceCard deviceId={device.deviceId} service='lighting' key={device.deviceId} detail>
					<h3>Manufacturer: {device.manufacturer}</h3>
					<h3>Model: {device.model}</h3>
					<h3>Revision: {device.revision}</h3>
					<OnOffSwitch isOn={this.state.isOn} onSwitch={this.onSwitchHandler} deviceId={device.deviceId}/>
					<p>Last Measurement: {new Date(lastReading.created_at).toLocaleString('it')}</p>
				</DeviceCard>
				<div className="graph-card">
					<h3>Last measurements</h3>
					<ResponsiveContainer height={500}>
						<LineChart data={readings} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
							<XAxis dataKey="created_at" tickFormatter={dateTick => new Date(dateTick).toLocaleTimeString()} name="Time"/>
							<YAxis name="State"/>
							<Legend />
							<Tooltip />
							<CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
							<Line type="monotone" dataKey='state.powerConsumption' name='Power Consumption' stroke="#8884d8" />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>

		);
	}

	render() {
		const { device } = this.state.lamp;
		return (
			<div className="contentDiv">
				<ToastContainer />
				{device ?
					this.renderCard() :
					<NoDevicesFound />
				}
			</div>
		);
	}
}
