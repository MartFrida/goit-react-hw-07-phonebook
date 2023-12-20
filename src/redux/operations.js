// https://65660ca1eb8bb4b70ef2d6ab.mockapi.io/api/v1/contacts
import axios from 'axios';
import { addContact, deleteContact, fetchingData, isError, isPending } from './contacts/contactsSlice';

axios.defaults.baseURL = 'https://65660ca1eb8bb4b70ef2d6ab.mockapi.io/api/v1'

export const fetchContactsThunk = () => async dispatch => {
  try {
    dispatch(isPending())
    const { data } = await axios.get('contacts')
    dispatch(fetchingData(data))
  } catch (error) {
    dispatch(isError(error.message))
  }
}

export const deleteContactThunk = (id) => async dispatch => {
  try {
    dispatch(isPending())
    const { data } = await axios.delete(`contacts/${id}`)
    dispatch(deleteContact(data.id))
  } catch (error) {
    dispatch(isError(error.message))
  }
}

export const addContactThunk = ({ name, number }) => async dispatch => {
  try {
    const { data } = await axios.post('contacts', { name, number })
    dispatch(addContact(data))
  } catch (error) {
    dispatch(isError(error.message))
  }
}