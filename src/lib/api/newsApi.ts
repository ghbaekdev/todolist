import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const instance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': `${API_KEY}`,
  },
});

export const getNewsList = async () => {
  const response = await instance.get(`/top-headlines?country=kr`);
  return response.data;
};
