import React from 'react';

import './OnOffSwitchStyle.css';

const OnOffSwitch = ({onSwitch, isOn, deviceId}) => (
	<div className="onoffswitch">
		<input
			type="checkbox"
			name={`${deviceId}onoffswitch`}
			className="onoffswitch-checkbox"
			id={`${deviceId}onoffswitch`}
			checked={isOn}
			onChange={e => onSwitch(e)}
		/>
		<label className="onoffswitch-label" htmlFor={`${deviceId}onoffswitch`}>
			<span className="onoffswitch-inner"></span>
			<span className="onoffswitch-switch"></span>
		</label>
	</div>
);

export default OnOffSwitch;
