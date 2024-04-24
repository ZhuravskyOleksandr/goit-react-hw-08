import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://661fdf1f16358961cd95c551.mockapi.io';

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios('/contacts');
      return response.data;
    } catch {
      return rejectWithValue('Unable to upload data.');
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch {
      return rejectWithValue('Failed to add a contact.');
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch {
      return rejectWithValue('Failed to delete a contact.');
    }
  }
);

export { fetchContacts, addContact, deleteContact };
