import { instance } from './api';
import { FormType } from '../../types/TodoType';

export const getTodoList = async () => {
  const response = await instance.get('/todo');
  return response.data;
};

export const createTodo = async (form: FormType) => {
  const response = await instance.post('/todo', form);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await instance.delete(`/todo/${id}`);
  return response.data;
};

export const updateTodo = async (form: FormType) => {
  const response = await instance.put(`/todo/${form.id}`, form);
  return response.data;
};
