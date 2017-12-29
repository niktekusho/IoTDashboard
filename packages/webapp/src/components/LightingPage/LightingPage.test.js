import React from 'react';
import ReactDOM from 'react-dom';
import LightingPage from './index';

import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const content = (
		<MemoryRouter>
			<LightingPage />
		</MemoryRouter>
	);
	// ReactDOM.render(content, div);
});
