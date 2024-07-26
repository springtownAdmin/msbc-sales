// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/form-slice';
import listReducer from './slices/list-slice';
import authReducer from './slices/auth-slice';

const store = configureStore({

  reducer: {
    auth: authReducer,
    enquiry_form: formReducer,
    enquiry_list: listReducer,
  },

});

export default store;