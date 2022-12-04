import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

export const getNewsList = async () => {
  const response = await instance.get(
    '/top-headlines?country=kr&apiKey=ffcb622f458944ca82a07a47bb0f474a'
  );
  return response.data;
};
