import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
	name: 'form',
	initialState: {
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	},
	reducers: {
		updateForm: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
