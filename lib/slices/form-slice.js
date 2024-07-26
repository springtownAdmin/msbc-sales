import { createSlice } from '@reduxjs/toolkit';
import { initialStateForEnquiry } from './dummy-data';

// Initial States

const initialState = {
    enquiry_no: '',
    enquiry_date: new Date().toISOString(),
    type: '',
    enquiry_by: [ 'phone' ],
    branch: 'Head Office',
    status: 'Lead In',
    by: '',
    estimator: '',
    sales_representative: '',
    project_name: '',
    architect_name: '',
    site_reference: '',
    tentative_project_value: '',
    notes: '',
    customer: '',
    contact_name: '',
    customer_email: '',
    mobile_no: '',
    phone_no: '',
    address: '',
    country: '',
    post_code: '',
    delivery_address: '',
    billing_address: ''
};

const initialCustomerState = {
    organization_type: [],
    name: '',
    email: '',
    phone_no: '',
    mobile_no: '',
    notes: '',
    branch: 'Head Office',
    account_code: '',
    source: '',
    category: '',
    sales_person: '',
    discount: '',
    status: '',
    send_auto_email_alerts: false,
    is_active: false,
    target_revenue: '',
    payment_terms: '',
    deposit_required: '',
    credit_limit: '',
    alert_type: '',
    vat_no: '',
    address: '',
    country: '',
    post_code: '',
    state: '',
    delivery_address: '',
    billing_address: '',
    city: '',
}


// Slices

const enquirySlice = createSlice({

  name: 'enquiry_form',
  // initialState: initialState,
  initialState: initialStateForEnquiry,
  reducers: {

    updateForm: (state, action) => {
      const { enquiry_date, ...other_fields } = action.payload;
      return { ...state, ...other_fields, enquiry_date: new Date(enquiry_date).toISOString() }
    },

    clearForm: (state, action) => {
      return initialState;
    },

    editForm: (state, action) => {
      return { ...action.payload };
    }

  },
  
});

export const { updateForm, clearForm, editForm } = enquirySlice.actions;
export default enquirySlice.reducer;