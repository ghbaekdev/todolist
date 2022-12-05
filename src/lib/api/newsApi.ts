import { NewsType } from '../../types/NewsType';
import { instance } from './todoApi';

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

const today = `${year}-${month}-${day}`;

export const getNewsList = async () => {
  const response = await instance.get(`/news.json`);

  return response.data.filter((news: NewsType) => {
    if (month < 10) return news.writedAt === `${year}-0${month}-${day}`;
    if (day < 10) return news.writedAt === `${year}-${month}-0${day}`;
    return news.writedAt === today;
  });
};
