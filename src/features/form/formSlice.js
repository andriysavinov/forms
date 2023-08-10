import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
	name: 'form',
	initialState: {
		entries: [],
	},
	reducers: {
		addFormEntry: (state, action) => {
			state.entries.push(action.payload);
		},
	},
});

export const { addFormEntry } = formSlice.actions;
export default formSlice.reducer;
