import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import Info from './Info';

describe('Testing <Info />', () => {
	setup(beforeEach)(
		() => renderWith()(<Info title='test' value='value' />)
	);

	test('Renders', () => {
		expect(
			screen.getByText('test')
		).toBeInTheDocument();

		expect(
			screen.getByText('value')
		).toBeInTheDocument();
	});
});
