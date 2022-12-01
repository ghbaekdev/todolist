import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormType } from '../types/TodoType';

const useMutationQuery = (api: any) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    (form: FormType, key?: string) => api(form, key),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todolist']);
      },
      onError: () => {
        alert('todo 등록 실패');
      },
    }
  );

  return { mutate, isLoading, isError };
};

export default useMutationQuery;
