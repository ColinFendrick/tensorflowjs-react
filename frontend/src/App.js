/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useAppContext } from './hooks';
import { Home } from './components';

const App = () => {
	const { getModel } = useAppContext();

	useEffect(getModel, []);

	return (
		<div>
      Basic Setup:
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
		</div>
	);
};

export default App;
