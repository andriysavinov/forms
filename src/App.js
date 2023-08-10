import React from 'react';
import { Form } from './features/form/Form';
import './App.css';
import { useSelector } from 'react-redux';

const StoredValuesList = () => {
	// Use the useSelector hook to get the entries from the store
	const entries = useSelector((state) => state.form.entries);

	return (
		<div>
			<h2>Stored Values</h2>
			{entries.length > 0 ? (
				entries.map((entry, index) => (
					<div key={index}>
						<div>First Name: {entry.first_name}</div>
						<div>Last Name: {entry.last_name}</div>
						<div>Email: {entry.email}</div>
						<div>Message: {entry.message}</div>
						<hr />
					</div>
				))
			) : (
				<p>No entries found.</p>
			)}
		</div>
	);
};

const App = () => {
	return (
		<div className="App">
			<header className="App-content">
				<Form />
				<StoredValuesList />
			</header>
		</div>
	);
};

export default App;
