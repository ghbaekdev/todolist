import React, { useEffect, useState } from 'react';
import * as S from '../Main/Main';
import * as D from '../Add/AddTodo';
import * as api from '../../lib/api/todoApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TodoForm from '../../components/TodoForm/TodoForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormType } from '../../types/TodoType';

const PutTodo = () => {
  const queryClient = useQueryClient();
  const [updateForm, setUpdateForm] = useState({
    id: 0,
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
  const navigate = useNavigate();

  const location = useLocation();

  const update = useMutation((addForm: FormType) => api.updateTodo(addForm), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todolist']);
    },
  });

  const updateQuery = (form: FormType) => {
    update.mutate(form);
    navigate('/');
  };

  useEffect(() => {
    const detailTodo = location.state.todo;
    if (detailTodo) return setUpdateForm(detailTodo);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const handleRepeat = (day: string, value: string) => {
    setUpdateForm((prev) => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: value,
      },
    }));
  };
  return (
    <PutTodoBox>
      <PutTodoHeader>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer' }}
        />
        <span>할 일 수정</span>
      </PutTodoHeader>
      <TodoForm
        data={updateForm}
        handleInput={handleInput}
        handleTextArea={handleTextArea}
        handleRepeat={handleRepeat}
      />
      <S.AddTodoButton onClick={() => updateQuery(updateForm)}>
        할 일 수정
      </S.AddTodoButton>
    </PutTodoBox>
  );
};

export default PutTodo;

const PutTodoBox = styled(S.MainBox)``;

const PutTodoHeader = styled(D.AddTodoHeader)``;
