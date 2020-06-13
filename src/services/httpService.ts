import axios, { AxiosInstance } from 'axios';
import { GOOGLE_API_URL } from '../config/variables';

let instance: AxiosInstance | null = null;

export const httpServices = (): AxiosInstance => {
  if (instance === null) {
    instance = axios.create({
      baseURL: GOOGLE_API_URL,
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }
  return instance;
};
