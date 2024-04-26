import toast from 'react-hot-toast';
import { Axios } from '../../constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Axios('/contacts');
      return response.data;
    } catch {
      return rejectWithValue('Unable to upload contacts.');
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const promise = Axios.post('/contacts', newContact);
      toast.promise(promise, {
        loading: 'Creating new contact...',
        success: `New contact successfully added`,
        error: 'Could not add a new contact. Please try again later',
      });
      const response = await promise;
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
      const promise = Axios.delete(`/contacts/${contactId}`);
      toast.promise(promise, {
        loading: 'Deleting contact...',
        success: `Successfully deleting a contact`,
        error: 'Contact could not be deleted. Please try again later',
      });
      const response = await promise;
      return response.data;
    } catch {
      return rejectWithValue('Failed to delete a contact.');
    }
  }
);

const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, ...contactData }, { rejectWithValue }) => {
    try {
      const promise = Axios.patch(`/contacts/${id}`, contactData);
      toast.promise(promise, {
        loading: 'Saving changes...',
        success: `Changes have been saved`,
        error: 'Could not update contact',
      });
      const response = await promise;
      return response.data;
    } catch {
      return rejectWithValue('Failed to save changes.');
    }
  }
);

export { fetchContacts, addContact, deleteContact, editContact };
