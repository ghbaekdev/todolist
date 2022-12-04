import { FormType } from '../../types/TodoType';
import axios from 'axios';
import { firebaseConfig } from '../../firebase';

export const instance = axios.create({
  baseURL: firebaseConfig.databaseURL,
});

export const getTodoList = async () => {
  const response = await instance.get('/todos.json');
  return response.data;
};

export const createTodo = async (form: FormType) => {
  const response = await instance.post('/todos.json', form);

  return response.data;
};

export const deleteTodo = async (keys: string) => {
  const response = await instance.delete(`/todos/${keys}.json`);
  return response.data;
};

export const updateTodo = async (form: any) => {
  const response = await instance.patch(`/todos.json`, form);
  return response.data;
};

export const detailTodo = async (key: string) => {
  const response = await instance.get(`/todos/${key}.json`);
  return response.data;
};
