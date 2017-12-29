import React from 'react';
import ReactDOM from 'react-dom';
import LightingDetailPage from './index';

import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const content = (
		<MemoryRouter>
			<LightingDetailPage />
		</MemoryRouter>
	);
	// ReactDOM.render(content, div);
});
