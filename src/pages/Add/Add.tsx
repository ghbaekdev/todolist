import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import * as api from '../../lib/api/todoApi';
import * as S from '../Main/Main';
import TodoForm from '../../components/TodoForm/TodoForm';
import NotFound from '../../components/NotFound/NotFound';
import Loading from '../../components/Loading/Loading';
import useMutationQuery from '../../hooks/useMutationQuery';
import useForm from '../../hooks/useForm';

const AddTodo = () => {
  const [addForm] = useState({
    title: '',
    description: '',
    checked: false,
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
  const { handleInput, handleTextArea, handleRepeat, form } = useForm(addForm);

  const navigate = useNavigate();

  const buttonAbled = form.title.length > 0;

  const { mutate, isLoading, isError } = useMutationQuery(api.createTodo);

  const createQuery = () => {
    mutate(form);
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
        data={form}
        handleInput={handleInput}
        handleTextArea={handleTextArea}
        handleRepeat={handleRepeat}
      />
      <AddButton disabled={!buttonAbled} onClick={createQuery}>
        할 일 추가
      </AddButton>
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

const AddButton = styled(S.AddTodoButton)`
  margin-top: 230px;
`;
