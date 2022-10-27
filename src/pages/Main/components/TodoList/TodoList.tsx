import React, { useState } from 'react';
import styled from 'styled-components';
// import { TodoListType, FormType } from '../../../../types/TodoType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import * as api from '../../../../lib/api/todoApi';
import { TodoListType } from '../../../../types/TodoType';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const deleteQuery = useMutation((id: number) => api.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todolist']);
    },
    onError: () => {
      alert('Error');
    },
  });

  const todo = useQuery(['todolist', deleteQuery.mutate], () =>
    api.getTodoList()
  );

  const goToUpdate = (todo: any) => {
    navigate('/update', {
      state: {
        todo,
      },
    });
  };

  return (
    <TodoWrap>
      <TodoTitle>오늘의 할 일</TodoTitle>
      <ListBox>
        {todo.data?.map((todo: TodoListType) => {
          return (
            <ListCard key={todo.id} onClick={() => goToUpdate(todo)}>
              <CheckBox type="checkbox" />
              <TextBox>
                <CardTitle>{todo.title}</CardTitle>
                <CardText>{todo.description}</CardText>
                <CardText>요일 반복</CardText>
              </TextBox>
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '2px',
                  right: '10px',
                  color: '#e52d58',
                }}
                size="xl"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteQuery.mutate(todo.id);
                }}
              />
            </ListCard>
          );
        })}
      </ListBox>
    </TodoWrap>
  );
};

export default TodoList;

const TodoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 20px;
`;

const TodoTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const ListBox = styled.div`
  height: 250px;
  overflow: auto;
`;

const ListCard = styled.div`
  display: flex;
  padding: 6px 8px;
  height: 90px;
  border-radius: 10px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.white};
  overflow: auto;
  position: relative;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 5px 0 0 8px;
`;

const CardTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const CardText = styled.span`
  font-size: 13px;
  font-weight: 200;
  margin: 10px 0 5px 0;
`;

const CheckBox = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 2px;
  width: 20px;
  height: 20px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.buttonColor};
  }
`;
