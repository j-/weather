import test from 'ava';
import createStore from './create-store';

import {
	setLatLon,
	notifyFetch,
	notifyError,
} from './actions';

import {
	getLatitude,
	getLongitude,
	isLocationValid,
	isLocationPending,
	getErrorMessage,
} from './';

test('Latitude and longitude are null by default', (t) => {
	t.plan(2);
	const store = createStore();
	const state = store.getState();
	t.is(
		getLatitude(state),
		null,
		'Latitude is null'
	);
	t.is(
		getLongitude(state),
		null,
		'Longitude is null'
	);
});

test('Can set latitude and longitude', (t) => {
	t.plan(2);
	const store = createStore();
	const action = setLatLon({
		lat: -37.8136612,
		lon: 144.9635766,
	});
	store.dispatch(action);
	const state = store.getState();
	t.is(
		getLatitude(state),
		-37.8136612,
		'Latitude is correct'
	);
	t.is(
		getLongitude(state),
		144.9635766,
		'Longitude is correct'
	);
});

test('State is not pending by default', (t) => {
	t.plan(1);
	const store = createStore();
	const state = store.getState();
	const isPending = isLocationPending(state);
	t.is(
		isPending,
		false,
		'State is not pending'
	);
});

test('State is pending after a request is made', (t) => {
	t.plan(1);
	const store = createStore();
	const action = notifyFetch();
	store.dispatch(action);
	const state = store.getState();
	const isPending = isLocationPending(state);
	t.is(
		isPending,
		true,
		'State is pending'
	);
});

test('State is not pending after a response is returned', (t) => {
	t.plan(1);
	const store = createStore();
	const fetch = notifyFetch();
	store.dispatch(fetch);
	const response = setLatLon({
		lat: -37.8136612,
		lon: 144.9635766,
	});
	store.dispatch(response);
	const state = store.getState();
	const isPending = isLocationPending(state);
	t.is(
		isPending,
		false,
		'State is not pending'
	);
});

test('State is not pending after an error occurs', (t) => {
	t.plan(1);
	const store = createStore();
	const fetch = notifyFetch();
	store.dispatch(fetch);
	const error = notifyError();
	store.dispatch(error);
	const state = store.getState();
	const isPending = isLocationPending(state);
	t.is(
		isPending,
		false,
		'State is not pending'
	);
});

test('State is not valid by default', (t) => {
	t.plan(1);
	const store = createStore();
	const state = store.getState();
	const isValid = isLocationValid(state);
	t.is(
		isValid,
		false,
		'State is not valid'
	);
});

test('State is valid after location is set', (t) => {
	t.plan(1);
	const store = createStore();
	const action = setLatLon({
		lat: -37.8136612,
		lon: 144.9635766,
	});
	store.dispatch(action);
	const state = store.getState();
	const isValid = isLocationValid(state);
	t.is(
		isValid,
		true,
		'State is valid'
	);
});
