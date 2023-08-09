import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setFirstName,
	setLastName,
	setEmail,
	setMessage,
	submitForm,
	selectCurrentForm,
	selectSubmissions,
} from './formSlice';
import './Form.module.css';

export function Form() {
	const dispatch = useDispatch();
	const currentForm = useSelector(selectCurrentForm);
	const submissions = useSelector(selectSubmissions); // Get the submissions

	const handleSubmit = (e) => {
		e.preventDefault();

		if (Object.keys(currentForm.errors).length === 0) {
			// Handle successful submission
			dispatch(submitForm());

			// Log the form submissions from the store
			console.log('All form submissions:', submissions);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				First Name:
				<input
					type="text"
					value={currentForm.firstName}
					onChange={(e) => dispatch(setFirstName(e.target.value))}
					required
				/>
			</label>
			{currentForm.errors.firstName && (
				<div className="error">{currentForm.errors.firstName}</div>
			)}
			<br />
			<label>
				Last Name:
				<input
					type="text"
					value={currentForm.lastName}
					onChange={(e) => dispatch(setLastName(e.target.value))}
					required
				/>
			</label>
			{currentForm.errors.lastName && (
				<div className="error">{currentForm.errors.lastName}</div>
			)}
			<br />
			<label>
				Email:
				<input
					type="email"
					value={currentForm.email}
					onChange={(e) => dispatch(setEmail(e.target.value))}
					required
				/>
			</label>
			{currentForm.errors.email && (
				<div className="error">{currentForm.errors.email}</div>
			)}
			<br />
			<label>
				Message:
				<textarea
					value={currentForm.message}
					onChange={(e) => dispatch(setMessage(e.target.value))}
					required
				/>
			</label>
			{currentForm.errors.message && (
				<div className="error">{currentForm.errors.message}</div>
			)}
			<br />
			<button
				type="submit"
				disabled={Object.keys(currentForm.errors).length > 0}
			>
				Submit
			</button>
		</form>
	);
}
