import { createSlice } from "@reduxjs/toolkit"
import { fetchContactsThunk } from "../../redux/operations"

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
    fetchingData: (state, { payload }) => {
      state.contacts = payload
      state.loading = false
    },
    isPending: (state, { payload }) => {
      state.loading = true
      state.error = ''
    },
    isError: (state, { payload }) => {
      state.error = payload
    },
    addContact:
      (state, { payload }) => {
        state.contacts.push(payload)
      },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(item => item.id !== action.payload)
      state.loading = false
    },
    setFilter: (state, { payload }) => {
      state.filter = payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
      state.contacts = payload
      state.loading = false
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