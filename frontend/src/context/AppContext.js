import { useState, createContext } from 'react';

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
	const [state, setState] = useState({ healthy: false, error: null });

	return (
		<AppContext.Provider value={[state, setState]}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
