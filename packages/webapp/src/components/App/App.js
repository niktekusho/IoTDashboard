import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import LightingPage from '../LightingPage';
import SettingsPage from '../SettingsPage';
import TemperaturePage from '../TemperaturePage';
import DevicesPage from '../DevicesPage';

import logo from './logo.svg';
import './App.css';

const App = () => (
	<div>
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/devices">Devices</NavLink>
			<NavLink to="/lighting">Lighting</NavLink>
			<NavLink to="/temperature">Temperature</NavLink>
			<NavLink to="/settings">Settings</NavLink>
		</nav>
		<div id="content">
			<Route path="/" component={HomePage} exact />
			<Route path="/devices" component={DevicesPage} />
			<Route path="/lighting" component={LightingPage} />
			<Route path="/temperature" component={TemperaturePage} />
			<Route path="/settings" component={SettingsPage} />
		</div>
	</div>
);

export default App;
