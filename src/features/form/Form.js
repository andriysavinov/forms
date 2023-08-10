import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormEntry } from './formSlice';
import validator from 'validator';
import styles from './Form.module.css';

export const Form = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validateForm = () => {
		let formErrors = {};
		if (!formData.first_name)
			formErrors.first_name = 'First name is required';
		if (!formData.last_name) formErrors.last_name = 'Last name is required';
		if (!validator.isEmail(formData.email))
			formErrors.email = 'Enter a valid email';
		if (formData.message.length < 10)
			formErrors.message = 'Message must be at least 10 characters long';

		setErrors(formErrors);
		return Object.keys(formErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			dispatch(addFormEntry(formData));
			alert('Form submitted successfully!'); // Alert to display success message
			console.log('Information recorded:', formData); // Logging the recorded information
			setFormData({
				first_name: '',
				last_name: '',
				email: '',
				message: '',
			});
		}
	};

	return (
		<div>
			<h2>Form</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="first_name"
					placeholder="First Name"
					value={formData.first_name}
					onChange={handleInputChange}
				/>
				{errors.first_name && (
					<div className={styles.error}>{errors.first_name}</div>
				)}

				<input
					type="text"
					name="last_name"
					placeholder="Last Name"
					value={formData.last_name}
					onChange={handleInputChange}
				/>
				{errors.last_name && (
					<div className={styles.error}>{errors.last_name}</div>
				)}

				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleInputChange}
				/>
				{errors.email && (
					<div className={styles.error}>{errors.email}</div>
				)}

				<textarea
					name="message"
					placeholder="Message"
					value={formData.message}
					onChange={handleInputChange}
				/>
				{errors.message && (
					<div className={styles.error}>{errors.message}</div>
				)}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
