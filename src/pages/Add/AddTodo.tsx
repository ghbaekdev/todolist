import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import * as api from '../../lib/api/todoApi';
import * as S from '../Main/Main';
import TodoForm from '../../components/TodoForm/TodoForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormType } from '../../types/TodoType';
import NotFound from '../../components/NotFound/NotFound';
import Loading from '../../components/Loading/Loading';

const AddTodo = () => {
  const [addForm, setAddForm] = useState({
    title: '',
    description: '',
    days: {
      일: false,
      월: false,
      화: false,
      수: false,
      목: false,
      금: false,
      토: false,
    },
  });

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const buttonAbled = addForm.title.length > 0;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  const handleRepeat = (day: string, value: string) => {
    setAddForm((prev) => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: value,
      },
    }));
  };
  const { mutate, isLoading, isError } = useMutation(
    (addForm: FormType) => api.createTodo(addForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todolist']);
      },
      onError: () => {
        alert('todo 등록 실패');
      },
    }
  );

  const deleteQuery = () => {
    mutate(addForm);
    navigate('/');
  };

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;

  return (
    <AddTodoBox>
      <AddTodoHeader>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <span>할 일 추가</span>
      </AddTodoHeader>
      <TodoForm
        data={addForm}
        handleInput={handleInput}
        handleTextArea={handleTextArea}
        handleRepeat={handleRepeat}
      />
      <S.AddTodoButton disabled={!buttonAbled} onClick={deleteQuery}>
        할 일 추가
      </S.AddTodoButton>
    </AddTodoBox>
  );
};

export default AddTodo;

const AddTodoBox = styled(S.MainBox)``;

export const AddTodoHeader = styled.header`
  font-size: 26px;
  font-weight: 600;
  padding: 30px;
  display: flex;
  span {
    margin: 0 10px;
  }
`;
