import React from 'react';
import { Form } from './features/form/Form';
import { StoredValuesList } from './features/storedValuesList/StoredValuesList';
import './App.css';

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
