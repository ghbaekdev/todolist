import { FormType } from '../../types/TodoType';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://baeks-todo-default-rtdb.firebaseio.com',
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

export const updateTodo = async (key: string, form: FormType) => {
  const response = await instance.put(`/todos/${key}.json`, form);
  return response.data;
};

export const detailTodo = async (key: string) => {
  const response = await instance.get(`/todos/${key}.json`);
  return response.data;
};
