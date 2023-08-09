import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateForm } from './formSlice';

export function Form() {
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form);

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(updateForm({ [name]: value }));
	};

	return (
		<div>
			<input
				name="firstName"
				value={formState.firstName}
				onChange={handleChange}
			/>
			<input
				name="lastName"
				value={formState.lastName}
				onChange={handleChange}
			/>
			<input
				name="email"
				value={formState.email}
				onChange={handleChange}
			/>
			<textarea
				name="message"
				value={formState.message}
				onChange={handleChange}
			/>
		</div>
	);
}

//export default Form;
