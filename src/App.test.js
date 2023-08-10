import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './App';

const mockStore = configureMockStore();
const initialState = { form: { entries: [] } };

describe('App Component', () => {
	test('renders Form component', () => {
		const store = mockStore(initialState);
		render(
			<Provider store={store}>
				<App />
			</Provider>,
		);
		expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
	});

	test('renders StoredValuesList component with no entries', () => {
		const store = mockStore(initialState);
		render(
			<Provider store={store}>
				<App />
			</Provider>,
		);
		expect(screen.getByText('No entries found.')).toBeInTheDocument();
	});

	test('renders StoredValuesList component with entries', () => {
		const store = mockStore({
			form: {
				entries: [
					{
						first_name: 'John',
						last_name: 'Doe',
						email: 'john@example.com',
						message: 'Test Message',
					},
				],
			},
		});
		render(
			<Provider store={store}>
				<App />
			</Provider>,
		);
		expect(screen.getByText('First Name: John')).toBeInTheDocument();
		expect(screen.getByText('Last Name: Doe')).toBeInTheDocument();
		expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
		expect(screen.getByText('Message: Test Message')).toBeInTheDocument();
	});
});
