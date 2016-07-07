export const LOCAL_STORAGE_KEY = 'redux-state';
export const DEFAULT_STATE = undefined;

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
		const state = JSON.parse(serializedState) || DEFAULT_STATE;
		return state;
	} catch (err) {
		return DEFAULT_STATE;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
	} catch (err) {
		// Ignore errors
	}
};
