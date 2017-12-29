import React from 'react';

import devicesLogo from './devices.png';
import lightingLogo from './lighting.png';
import settingsLogo from './settings.png';
import temperatureLogo from './temperature.png';

const Image = ({content, width, height}) => {
	let image;
	switch(content.toLowerCase()) {
	case 'devices':
		image = devicesLogo;
		break;
	case 'lighting':
		image = lightingLogo;
		break;
	case 'user':
		image = settingsLogo;
		break;
	default:
		image = temperatureLogo;
	}
	return <img width={width} height={height} src={image} alt={`${content} image`}/>;
};

export default Image;
