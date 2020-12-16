import { useContext } from 'react';

import AppService from '../services/AppService';
import { AppContext } from '../context/AppContext';

const useAppContext = () => {
	const [appState, setAppState] = useContext(AppContext);

	const checkHealth = async (page = '') => {
		try {
			await AppService.get(page);
			setAppState({ healthy: true, error: null });
		} catch (e) {
			setAppState({ healthy: false, error: e });
		}
	};

	return {
		checkHealth,
		appState,
		setAppState
	};
};

export default useAppContext;
