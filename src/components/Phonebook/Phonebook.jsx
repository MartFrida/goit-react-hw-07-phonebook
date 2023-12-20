import React, { useEffect } from 'react';
import { StyledWrapper } from './Phonebook.styled';
import { FilterUsers } from 'components/FilterUsers/FilterUsers';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from '../../redux/operations';
import { selectContacts, selectError, selectFilter, selectLoading } from '../../redux/selectors';

export const Phonebook = () => {

  const filter = useSelector(selectFilter)
  const contacts = useSelector(selectContacts)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])

  const handleAddUser = ({ name, number }) => {
    const isExist = contacts.some((item) => item.name === name)
    if (isExist) {
      alert('ALERT')
      return
    }
    const newContact = { id: nanoid(), name, number }
    dispatch(addContactThunk(newContact))
  }

  const handleSetFilter = (e) => {
    dispatch(setFilter(e.target.value))
  }

  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const handleDeleteUser = (id) => {
    dispatch(deleteContactThunk(id))
  }

  return (
    <StyledWrapper >

      <h2>Phonebook</h2>
      <ContactForm onAddContact={handleAddUser} />
      <h2>Contacts</h2>
      <FilterUsers filter={filter} handleChangeInput={handleSetFilter} />
      <ContactList filteredContacts={getFilteredContacts()} onDeleteUser={handleDeleteUser} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </StyledWrapper>
  )
}