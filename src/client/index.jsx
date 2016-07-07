import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import createStore from './store/create-store';
import { requestLatLon } from './store/actions';
import { saveState, loadState } from './local-storage';

// Read previous state from local storage
const initialState = loadState();
const store = createStore(initialState);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);

store.dispatch(requestLatLon());

// Persist state to local storage
store.subscribe(() => {
	saveState(store.getState());
});
