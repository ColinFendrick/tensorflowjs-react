import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useAppContext } from './hooks';
import { Home } from './components';

const App = () => {
	const { checkHealth } = useAppContext();

	useEffect(checkHealth, []);

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
