import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';

import { BASE_API } from '@/config/config';

export const client = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const rtkClient = fetchBaseQuery({
  baseUrl: BASE_API,
  fetchFn: fetch,
});
