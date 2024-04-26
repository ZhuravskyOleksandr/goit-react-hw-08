import axios from 'axios';
import * as Yup from 'yup';

export const Axios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setAuthToken = token => {
  Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  Axios.defaults.headers.common.Authorization = '';
};

export const authInitialState = Object.freeze({
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
});

export const modalInitialState = Object.freeze({
  isModalOpen: false,
  actionType: '',
  modalData: null,
});

export const contactsInitialState = Object.freeze({
  items: [],
  loading: false,
  error: null,
});

export const actions = Object.freeze({
  logOut: 'logOut',
  editContact: 'editContact',
  deleteContact: 'deleteContact',
});

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
      'Invalid phone number'
    )
    .min(7, 'Must be at least 7 characters long')
    .max(50, 'Must be no more than 50 characters long')
    .required('Required'),
});

export const EditSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
      'Invalid phone number'
    )
    .min(7, 'Must be at least 7 characters long')
    .max(50, 'Must be no more than 50 characters long')
    .required('Required'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(7, 'Must be at least 7 characters long')
    .required('Password is required!'),
});

export const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(7, 'Must be at least 7 characters long')
    .required('Password is required!'),
});

export const contactFormInitValues = Object.freeze({
  name: '',
  number: '',
});

export const loginFormInitValues = Object.freeze({
  email: '',
  password: '',
});

export const registerationFormInitValues = Object.freeze({
  name: '',
  email: '',
  password: '',
});
