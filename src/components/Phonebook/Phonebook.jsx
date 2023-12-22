import React, { useEffect } from 'react';
import { FilterUsers } from 'components/FilterUsers/FilterUsers';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from '../../redux/operations';
import { selectError, selectFilter, selectFilteredData, selectLoading } from '../../redux/selectors';

export const Phonebook = () => {

  const filter = useSelector(selectFilter)
  const contacts = useSelector(selectFilteredData)
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
    const newContact = { name, number }
    dispatch(addContactThunk(newContact))
  }

  const handleSetFilter = (e) => {
    dispatch(setFilter(e.target.value))
  }

  const handleDeleteUser = (id) => {
    dispatch(deleteContactThunk(id))
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 mx-auto min-w-64 max-w-max lg:px-8 ">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Phonebook</h2>
      <ContactForm onAddContact={handleAddUser} />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Contacts</h2>
      <FilterUsers filter={filter} handleChangeInput={handleSetFilter} />
      <ContactList onDeleteUser={handleDeleteUser} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </div>
  )
}