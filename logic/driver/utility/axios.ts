import axiosBase from 'axios';

export const axios = axiosBase.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': process.env.NEXT_PUBLIC_X_API_KEY,
  },
});
