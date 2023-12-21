// https://65660ca1eb8bb4b70ef2d6ab.mockapi.io/api/v1/contacts
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65660ca1eb8bb4b70ef2d6ab.mockapi.io/api/v1'

export const fetchContactsThunk = createAsyncThunk('fetchContacts', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('contacts')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`contacts/${id}`)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addContactThunk = createAsyncThunk('addContact', async ({ name, number }, thunkAPI) => {
  try {
    const { data } = await axios.post('contacts', { name, number })
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})