import { createSlice } from '@reduxjs/toolkit';

import { addContact, fetchContacts, deleteContact } from './operations';
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filteredContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.items.push(payload);
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.contacts.isLoading = false;
    },
    [deleteContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== payload.id
      );
      state.contacts.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.contacts.isLoading = false;
    },
  },
});

export const { filteredContacts } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
