import { useContext } from 'react';

import AppService from '../services/AppService';
import { AppContext } from '../context/AppContext';

const useAppContext = () => {
	const [appState, setAppState] = useContext(AppContext);

	const checkHealth = async () => {
		try {
			await AppService.healthCheck();
			setAppState({ ...appState, error: null });
		} catch (error) {
			setAppState({ ...appState, error });
		}
	};

	const getModel = async () => {
		try {
			const res = await AppService.get();
			setAppState({ ...appState, error: null, data: res.data });
		} catch (error) {
			setAppState({ ...appState, error });
		}
	};

	return {
		checkHealth,
		getModel,
		appState,
		setAppState
	};
};

export default useAppContext;
