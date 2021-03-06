import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import settings from '../../settings';

import './style.css';

export default class SettingsPage extends Component {
	constructor(props) {
		super(props);

		this.url = `${settings.api.url}/user`;

		this.state = {
			user: '',
			selectedUnits: {},
			availableTemperatureUnits: [],
		};
	}

	componentDidMount() {
		fetch(this.url).then(result => result.json()).then(
			data => {
				this.setState({
					user: data.name || '',
					selectedUnits: JSON.parse(data.units),
				});
			}
		);
		fetch(`${this.url}/temperature`).then(result => result.json()).then(
			data => this.setState({
				availableTemperatureUnits: data.possibilities
			})
		).catch(error => console.error(error));
	}

	handleUsernameChange(newUser) {
		this.setState({
			user: newUser,
		});
	}

	handleUnitChange(unitName, newValue) {
		// unitName = 'temperature', etc.
		this.setState({
			selectedUnits: Object.assign(this.state.selectedUnits, {[unitName]: newValue}),
		});
	}

	handleSave() {
		fetch(this.url, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				name: this.state.user,
				units: this.state.selectedUnits,
			})
		}).then((response) => {
			if (response.status === 200) {
				toast.success('Settings saved!');
			} else {
				toast.error('Settings not saved! Check log for details.');
				console.error(response.body); // eslint-disable-line
			}
		});
	}

	removeDegreeFromUnit(unitFullName) {
		return unitFullName.slice(7);
	}

	render() {
		const unitsToRender = [];

		const temperatureOptions = [];

		for (let unit of this.state.availableTemperatureUnits) {
			const optionToRender = (
				<option value={unit.abbr} key={unit.abbr}>
					{this.removeDegreeFromUnit(unit.singular)}
				</option>
			);

			temperatureOptions.push(optionToRender);
		}

		for (let [unitName, unitValue] of Object.entries(this.state.selectedUnits)) {
			const unit = (
				<div key={unitName}>
					<label htmlFor={unitName}>{unitName}</label>
					<select onChange={(e) => this.handleUnitChange(unitName, e.target.value)} value={unitValue}>
						{temperatureOptions}
					</select>
				</div>
			);
			unitsToRender.push(unit);
		}

		return (
			<div id="settingsPage">
				<ToastContainer />
				<label htmlFor="userInput">User</label>
				<input
					type="text"
					name="userInput"
					value={this.state.user}
					onChange={(event) => this.handleUsernameChange(event.target.value)}
				/>
				{unitsToRender}
				<button onClick={() => this.handleSave()}>Save</button>
			</div>
		);
	}
}
