// https://65660ca1eb8bb4b70ef2d6ab.mockapi.io/api/v1/contacts
import axios from 'axios';
import { deleteContact, fetchingData, isError, isPending } from './contacts/contactsSlice';

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
    console.log(error.message)
  }
}

export const addContactThunk = (contact) => async dispatch => {
  try {
    const { data } = await axios.post('contacts', {})
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}