import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import HomePage from '../HomePage';
import LightingPage from '../LightingPage';
import SettingsPage from '../SettingsPage';
import TemperaturePage from '../TemperaturePage';
import DevicesPage from '../DevicesPage';
import TemperatureDetailPage from '../TemperatureDetailPage';
import LightingDetailPage from '../LightingDetailPage';

// import logo from './logo.svg';
import './App.css';

const App = () => (
	<div>
		<nav>
			<NavLink exact to="/">Home</NavLink>
			<NavLink to="/devices">Devices</NavLink>
			<NavLink to="/lighting">Lighting</NavLink>
			<NavLink to="/temperature">Temperature</NavLink>
			<NavLink to="/settings">Settings</NavLink>
		</nav>
		<div id="content">
			<Route path="/" component={HomePage} exact />
			<Route path="/devices" component={DevicesPage} exact />
			<Route path="/lighting" component={LightingPage} exact />
			<Route path="/lighting/:deviceId" component={LightingDetailPage} exact />
			<Route path="/temperature" component={TemperaturePage} exact />
			<Route path="/temperature/:deviceId" component={TemperatureDetailPage} exact />
			<Route path="/settings" component={SettingsPage} exact />
		</div>
	</div>
);

export default withRouter(App);
