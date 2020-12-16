import { screen } from '@testing-library/react';

import { setup, renderWith, withRouter, withContext } from './setupTests';

import App from './App';

describe('Testing <App />', () => {
	setup(beforeAll)(
		() => renderWith(withContext, withRouter)(<App />)
	);

	test('Shows the basic setup', () => {
		expect(
			screen.getByText('Basic Setup:')
		).toBeInTheDocument();
	});
});
