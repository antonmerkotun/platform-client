import axiosOriginal from 'axios';
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

import { useRequestHandler } from '@/composables';
import { Urls } from '@/constants/urls';
import router from '@/router/router';
import type { API } from '@/types/global';

export const axiosOptions: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_URL,
};
const axiosWithoutInterceptor = axiosOriginal.create(axiosOptions);
const axios: AxiosInstance = axiosOriginal.create(axiosOptions);

axiosWithoutInterceptor.interceptors.response.use(
  (value) => {
    return value;
  },
  async (error: AxiosError<API.ErrorResponse>) => {
    return Promise.reject(new Error(extractError(error)));
  },
);

axios.interceptors.response.use(
  (value) => {
    return value;
  },
  async (error: AxiosError<API.ErrorResponse>) => {
    const { requestHandler } = useRequestHandler();

    if (error.response?.status === 401) {
      await requestHandler(
        async () => {
          await router.push(Urls.SignIn);
        },
        {
          disableErrorNotification: true,
        },
      );
    }

    return Promise.reject(new Error(extractError(error)));
  },
);

function extractError(error: AxiosError<API.ErrorResponse>) {
  return error.response?.data?.error;
}

export { axios, axiosWithoutInterceptor };
