import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import * as S from '../Main/Main';
import TodoForm from '../../components/TodoForm/TodoForm';

const AddTodo = () => {
  const [buttonState, setButtonState] = useState();
  const navigate = useNavigate();

  return (
    <AddTodoBox>
      <AddTodoHeader>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer' }}
        />
        <span>할 일 추가</span>
      </AddTodoHeader>
      <TodoForm />
      <S.AddTodoButton disabled={false}>할 일 추가</S.AddTodoButton>
    </AddTodoBox>
  );
};

export default AddTodo;

const AddTodoBox = styled(S.MainBox)``;

const AddTodoHeader = styled.header`
  font-size: 26px;
  font-weight: 600;
  padding: 30px;
  display: flex;
  span {
    margin: 0 10px;
  }
`;
