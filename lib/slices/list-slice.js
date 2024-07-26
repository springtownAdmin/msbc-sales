import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enquiries: [],
  length: 0
};

const enquirySlice = createSlice({
  
  name: 'enquiry_list',
  initialState,
  reducers: {

    addEnquiry: (state, action) => {

        const enquiry = action.payload;
        enquiry.enquiry_date = new Date(enquiry.enquiry_date).toISOString();
        state.enquiries.push(enquiry);
        state.length++;

    },

    updateEnquiry: (state, action) => {

        const { index, enquiry } = action.payload;
        enquiry.enquiry_date = new Date(enquiry.enquiry_date).toISOString();
        state.enquiries[index] = enquiry;

    },

  },

});

export const { addEnquiry, updateEnquiry } = enquirySlice.actions;
export default enquirySlice.reducer;
