import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './';

const devtools = typeof window !== 'undefined' && window.devToolsExtension ?
	window.devToolsExtension() :
	(i) => i;

export default (defaultState, ...middleware) => (
	createStore(
		reducer,
		defaultState,
		compose(
			applyMiddleware(
				thunk,
				...middleware
			),
			devtools
		)
	)
);
