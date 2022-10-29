import React, { useEffect, useState } from 'react';
import * as S from '../Main/Main';
import * as D from '../Add/Add';
import * as api from '../../lib/api/todoApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TodoForm from '../../components/TodoForm/TodoForm';
import { FormType } from '../../types/TodoType';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import useMutationQuery from '../../hooks/useMutationQuery';

const PutTodo = () => {
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

  const { mutate, isLoading, isError } = useMutationQuery(api.updateTodo);

  const updateQuery = (form: FormType) => {
    mutate(form);
    navigate('/');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const handleRepeat = (day: string, value: boolean) => {
    setUpdateForm((prev) => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: value,
      },
    }));
  };

  useEffect(() => {
    const detailTodo = location.state.todo;
    if (detailTodo) return setUpdateForm(detailTodo);
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;
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
      <UpdateButton onClick={() => updateQuery(updateForm)}>
        할 일 수정
      </UpdateButton>
    </PutTodoBox>
  );
};

export default PutTodo;

const PutTodoBox = styled(S.MainBox)``;

const PutTodoHeader = styled(D.AddTodoHeader)``;

const UpdateButton = styled(S.AddTodoButton)`
  margin-top: 230px;
`;
