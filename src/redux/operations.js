// https://65660ca1eb8bb4b70ef2d6ab.mockapi.io/api/v1/contacts
import axios from 'axios';
import { addContact, deleteContact, fetchingData, isError, isPending } from './contacts/contactsSlice';
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
    const { data } = await axios.get(`contacts/${id}`)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})



// export const fetchContactsThunk = () => async dispatch => {
//   try {
//     dispatch(isPending())
//     const { data } = await axios.get('contacts')
//     dispatch(fetchingData(data))
//   } catch (error) {
//     dispatch(isError(error.message))
//   }
// }

// export const deleteContactThunk = (id) => async dispatch => {
//   try {
//     dispatch(isPending())
//     const { data } = await axios.delete(`contacts/${id}`)
//     dispatch(deleteContact(data.id))
//   } catch (error) {
//     dispatch(isError(error.message))
//   }
// }
export const addContactThunk = createAsyncThunk('addContact', async ({ name, number }, thunkAPI) => {
  try {
    const { data } = await axios.post('contacts', { name, number })
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

// export const addContactThunk = ({ name, number }) => async dispatch => {
//   try {
//     const { data } = await axios.post('contacts', { name, number })
//     dispatch(addContact(data))
//   } catch (error) {
//     dispatch(isError(error.message))
//   }
// }