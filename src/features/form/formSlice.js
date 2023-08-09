import { createSlice } from '@reduxjs/toolkit';
import validator from 'validator';

export const formSlice = createSlice({
	name: 'form',
	initialState: {
		currentForm: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
			errors: {},
		},
		submissions: [], // Array to hold submitted forms
	},
	reducers: {
		setFirstName: (state, action) => {
			state.currentForm.firstName = action.payload;
			if (!state.currentForm.firstName.trim()) {
				state.currentForm.errors.firstName = 'First Name is required.';
			} else {
				delete state.currentForm.errors.firstName;
			}
		},
		setLastName: (state, action) => {
			state.currentForm.lastName = action.payload;
			if (!state.currentForm.lastName.trim()) {
				state.currentForm.errors.lastName = 'Last Name is required.';
			} else {
				delete state.currentForm.errors.lastName;
			}
		},
		setEmail: (state, action) => {
			state.currentForm.email = action.payload;
			if (!validator.isEmail(state.currentForm.email)) {
				state.currentForm.errors.email = 'Enter a valid email.';
			} else {
				delete state.currentForm.errors.email;
			}
		},
		setMessage: (state, action) => {
			state.currentForm.message = action.payload;
			if (state.currentForm.message.length < 10) {
				state.currentForm.errors.message =
					'Message should be at least 10 characters long.';
			} else {
				delete state.currentForm.errors.message;
			}
		},
		clearForm: (state) => {
			state.currentForm.firstName = '';
			state.currentForm.lastName = '';
			state.currentForm.email = '';
			state.currentForm.message = '';
			state.currentForm.errors = {};
			state.currentForm.submitted = true; // You can use this to show a success message
		},
		submitForm: (state) => {
			state.submissions.push(state.currentForm);
			state.currentForm = {
				firstName: '',
				lastName: '',
				email: '',
				message: '',
				errors: {},
			};
		},
	},
});

export const { setFirstName, setLastName, setEmail, setMessage, submitForm } =
	formSlice.actions;
export const selectCurrentForm = (state) => state.form.currentForm;
export const selectSubmissions = (state) => state.form.submissions;
export default formSlice.reducer;
