import { instance } from './api';

export const getNewsList = async () => {
  const response = await instance.get('/news');
  return response.data;
};
