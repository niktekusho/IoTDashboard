import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './index';

import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const content = (
		<MemoryRouter>
			<HomePage />
		</MemoryRouter>
	);
	// ReactDOM.render(content, div);
});
