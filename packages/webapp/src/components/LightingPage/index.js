import React, { Component } from 'react';

import settings from '../../settings';

export default class LightingPage extends Component {
	constructor(props) {
		super(props);
		this.url = `${settings.api.url}/lighting`;

		this.state = {
			lamps: new Map(),
		};
	}

	componentDidMount() {
		fetch(this.url)
			.then(result => result.json())
			.then(data => {
				const map = new Map();
				for (let lightData of data) {
					const { device, state } = lightData;
					map.set(device, state);
				}
				this.setState({
					lamps: map,
				});
			});
	}

	render() {
		const lamps = [];
		for (let [key, value] of this.state.lamps) {
			lamps.push({
				device: key,
				state: value.isOn,
			});
		}

		return (
			<div>
				{lamps.map((lamp, index) => {
					<div className="card">
						<h4>lamp.device</h4>
						{lamp.state}
					</div>
				})}
			</div>
		);
	}
}
