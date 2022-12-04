// import { NewsType } from '../../types/NewsType';
// import { instance } from './api';

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let day = date.getDate();

// const today = `${year}-${month}-${day}`;

// export const getNewsList = async () => {
//   const response = await instance.get(`/news.json`);

//   return response.data.filter((news: NewsType) => {
//     if (month < 10) return news.writedAt === `${year}-0${month}-${day}`;
//     if (day < 10) return news.writedAt === `${year}-${month}-0${day}`;
//     return news.writedAt === today;
//   });
// };

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
