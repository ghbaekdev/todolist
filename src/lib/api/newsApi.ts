import { instance } from './api';
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const today = `${year}-${month}-${day}`;

export const getNewsList = async () => {
  const response = await instance.get(`/news?writedAt=${today}`);
  return response.data;
};
