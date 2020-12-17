import { useState, createContext } from 'react';

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
	const [state, setState] = useState({ error: null, data: {}});

	return (
		<AppContext.Provider value={[state, setState]}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
