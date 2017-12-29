import React from 'react';
import ReactDOM from 'react-dom';
import DeviceCard from './DeviceCard';

import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const content = (
		<MemoryRouter>
			<DeviceCard />
		</MemoryRouter>
	);
	ReactDOM.render(content, div);
});
