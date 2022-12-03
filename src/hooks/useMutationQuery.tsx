import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormType, UpdateDataType } from '../types/TodoType';

const useMutationQuery = (api: any) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    (form: FormType | UpdateDataType) => {
      return api(form);
    },
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
