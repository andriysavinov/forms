import React from 'react';
import { useSelector } from 'react-redux';
import styles from './StoredValuesList.module.css';

export const StoredValuesList = () => {
	// Use the useSelector hook to get the entries from the store
	const entries = useSelector((state) => state.form.entries);

	return (
		<div>
			<h2>Stored Values</h2>
			{entries.length > 0 ? (
				entries.map((entry) => {
					// Create a unique key by combining the fields
					const uniqueKey = `${entry.first_name}-${entry.last_name}-${entry.email}`;

					return (
						<div key={uniqueKey}>
							<div>First Name: {entry.first_name}</div>
							<div>Last Name: {entry.last_name}</div>
							<div>Email: {entry.email}</div>
							<div>Message: {entry.message}</div>
							<hr />
						</div>
					);
				})
			) : (
				<p className={styles.warning}>No entries found.</p>
			)}
		</div>
	);
};
