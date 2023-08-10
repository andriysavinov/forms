import { render, fireEvent, screen } from '@testing-library/react';
import { Form } from './Form';
import { Provider } from 'react-redux';
//import store from '../../app/store'; // Import the store from your app
import configureMockStore from 'redux-mock-store';
import formReducer, { addFormEntry } from './formSlice';
// Other imports...

const mockStore = configureMockStore();
const initialState = {
	form: {
		entries: [],
		// Other initial state...
	},
};

describe('Form Component', () => {
	const store = mockStore(initialState);
	test('renders form correctly', () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>,
		);
		expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
	});

	test('input updates on change', () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>,
		);
		const firstNameInput = screen.getByPlaceholderText('First Name');
		fireEvent.change(firstNameInput, { target: { value: 'John' } });
		expect(firstNameInput.value).toBe('John');
	});

	test('shows error for empty first name', () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>,
		);
		fireEvent.click(screen.getByText('Submit'));
		expect(screen.getByText('First name is required')).toBeInTheDocument();
	});

	test('shows error for empty last name', () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>,
		);
		fireEvent.click(screen.getByText('Submit'));
		expect(screen.getByText('Last name is required')).toBeInTheDocument();
	});

	test('shows error for invalid email', () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>,
		);
		fireEvent.change(screen.getByPlaceholderText('Email'), {
			target: { value: 'invalid-email' },
		});
		fireEvent.click(screen.getByText('Submit'));
		expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
	});

	test('shows error for short message', () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>,
		);
		fireEvent.change(screen.getByPlaceholderText('Message'), {
			target: { value: 'Short' },
		});
		fireEvent.click(screen.getByText('Submit'));
		expect(
			screen.getByText('Message must be at least 10 characters long'),
		).toBeInTheDocument();
	});

	test('should dispatch addFormEntry action on valid form submit', () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>,
		);
		fireEvent.change(screen.getByPlaceholderText('First Name'), {
			target: { value: 'John' },
		});
		fireEvent.change(screen.getByPlaceholderText('Last Name'), {
			target: { value: 'Doe' },
		});
		fireEvent.change(screen.getByPlaceholderText('Email'), {
			target: { value: 'john@example.com' },
		});
		fireEvent.change(screen.getByPlaceholderText('Message'), {
			target: { value: 'Test Message' },
		});

		fireEvent.click(screen.getByText('Submit'));

		const actions = store.getActions();
		expect(actions[0].type).toBe('form/addFormEntry');
		expect(actions[0].payload).toEqual({
			first_name: 'John',
			last_name: 'Doe',
			email: 'john@example.com',
			message: 'Test Message',
		});
	});
});

describe('form reducer', () => {
	test('should handle initial state', () => {
		expect(formReducer(undefined, {})).toEqual({
			entries: [],
		});
	});

	test('should handle addFormEntry', () => {
		const payload = {
			first_name: 'John',
			last_name: 'Doe',
			email: 'john@example.com',
			message: 'Test Message',
		};
		expect(
			formReducer(
				{ entries: [] },
				{
					type: addFormEntry.type,
					payload,
				},
			),
		).toEqual({
			entries: [payload],
		});
	});
});
