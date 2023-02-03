import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [contactsInitialState],

  reducers: {
    addContacts(state, action) {
      state[0] = [...state[0], action.payload];
    },

    deleteContacts(state, action) {
      state[0].filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
