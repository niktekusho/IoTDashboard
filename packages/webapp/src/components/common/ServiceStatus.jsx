import React, { Component } from 'react';

import settings from '../../settings';

import './ServiceStatusStyle.css';
import devicesLogo from './devices.png';
import lightingLogo from './lighting.png';
import settingsLogo from './settings.png';
import temperatureLogo from './temperature.png';

export default class ServiceStatus extends Component {
	constructor(props) {
		super(props);
		const { service } = this.props;
		this.url = `${settings.api.url}/${service}`;

		switch (service.toLowerCase()) {
			case 'devices':
				this.image=devicesLogo;
				break;
			case 'lighting':
				this.image=lightingLogo;
				break;
			case 'settings':
				this.image=settingsLogo;
				break;
			case 'temperature':
				this.image=temperatureLogo;
				break;
		}

		this.state = {
			ok: false,
		};
	}

	componentDidMount() {
		fetch(this.url)
			.then(result => this.setState({
				ok: result.status === 200,
			}));
	}

	render() {
		const { service, color } = this.props;

		const style = {
			backgroundColor: (this.state.ok) ? 'green' : 'red',
		};

		return (
			<div className="card">
				<img src={this.image} />
				<div className="container">
					<h4>{service}</h4>
					Status: <div style={style} className="status"></div>
				</div>
			</div>
		);
	}
}
