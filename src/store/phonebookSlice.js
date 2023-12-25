import { createSlice } from '@reduxjs/toolkit';
//import { nanoid } from 'nanoid';
import {
  addContactsThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== payload.id
        );
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(fetchContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});

export const contactsReducer = phonebookSlice.reducer;
export const { setFilter } = phonebookSlice.actions;
