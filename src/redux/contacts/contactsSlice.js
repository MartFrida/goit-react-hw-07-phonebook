import { createSlice } from "@reduxjs/toolkit"
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from "../../redux/operations"

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: '',
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers:
  {
    setFilter: (state, { payload }) => {
      state.filter = payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
      state.contacts = payload
      state.loading = false
    })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(item => item.id !== payload.id)
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload)
        state.loading = false
      })
      .addCase(addContactThunk.pending, state => {
        state.loading = true
      })
      .addCase(fetchContactsThunk.pending, state => {
        state.loading = true
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
  }
})

export const { addContact, deleteContact, setFilter, fetchingData, isPending, isError } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer