import { createSelector } from "@reduxjs/toolkit"

export const selectFilter = state => state.contactsData.filter
export const selectContacts = state => state.contactsData.contacts
export const selectLoading = state => state.contactsData.loading
export const selectError = state => state.contactsData.error

export const selectFilteredData = createSelector([selectContacts, selectFilter], (contacts, filter) => {
  console.log('FILTER CONTACTS')
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
})

