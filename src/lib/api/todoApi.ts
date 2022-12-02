import { FormType } from '../../types/TodoType';
import { instance } from './api';

export const getTodoList = async () => {
  const response = await instance.get('/todos.json');
  return response.data;
};

export const createTodo = async (form: FormType) => {
  const response = await instance.post('/todos.json', form);
  console.log(response.data);
  return response.data;
};

export const deleteTodo = async (keys: string) => {
  const response = await instance.delete(`/todos/${keys}.json`);
  return response.data;
};

// export const updateTodo = async (form: FormType, key: string) => {
//   const updateForm = { key: form };
//   const response = await instance.put(`/todos.json`, updateForm);
//   return response.data;
// };
export const updateTodo = async (form: FormType, key: string) => {
  const updateForm = { [key]: form };
  const response = await instance.put(`/todos.json`, updateForm);
  return response.data;
};

export const detailTodo = async (key: string) => {
  const response = await instance.get(`/todos/${key}.json`);
  return response.data;
};
