import toast from 'react-hot-toast';
import { Axios, setAuthToken, clearAuthToken } from '../../constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const promise = Axios.post('/users/signup', credentials);
      toast.promise(promise, {
        loading: 'Registering',
        success: `Welcome, ${credentials.name}!`,
        error: 'Registration failed. Please try again later',
      });
      const response = await promise;
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const promise = Axios.post('/users/login', credentials);
      toast.promise(
        promise,
        {
          loading: 'Loggin in',
          error: 'Wrong email or password',
        },
        {
          id: 'login',
        }
      );
      const response = await promise;
      toast.promise(
        promise,
        {
          success: `Welcome back, ${response.data.user.name}!`,
        },
        {
          id: 'login',
        }
      );
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  '/auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { name } = getState().auth.user;
      const promise = Axios.post('/users/logout');
      toast.promise(promise, {
        loading: 'Loggin out',
        success: `See you soon, ${name}!`,
        error: 'Failed to log out. Please try again later',
      });
      clearAuthToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;

      if (token === null) {
        return rejectWithValue('Unable to fetch user');
      }

      try {
        setAuthToken(token);
        const promise = Axios('/users/current');
        toast.promise(
          promise,
          {
            loading: 'Loading user data',
            success: `Loading complete!`,
            error: 'Failed to upload user data',
          },
          {
            id: 'refreshUser',
          }
        );
        const response = await promise;
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { register, login, logout, refreshUser };
