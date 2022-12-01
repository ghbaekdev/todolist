import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import * as api from '../../../../lib/api/todoApi';
import { TodoListType, TodoTestType } from '../../../../types/TodoType';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const deleteQuery = useMutation((keys: string) => api.deleteTodo(keys), {
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
  const handleChecked = (
    e: React.MouseEvent<HTMLInputElement>,
    key: string
  ) => {
    e.stopPropagation();
    const { checked } = e.currentTarget;
    localStorage.setItem(`${key}`, JSON.stringify({ key: checked }));
  };

  const goToUpdate = (key: string) => {
    navigate('/update', {
      state: {
        key,
      },
    });
  };

  return (
    <TodoWrap>
      <TodoTitle>오늘의 할 일</TodoTitle>
      <ListBox>
        {todo.data &&
          Object.keys(todo.data).map((key: string) => {
            const item = todo.data[key];
            let selectedDays;
            if (item.days) {
              const daysArray = Object.entries(item.days);
              selectedDays = daysArray.filter(([day, selected]) => {
                return selected && day;
              });
            }
            let checked;
            if (localStorage.getItem(`${key}`)) {
              checked = JSON.parse(localStorage.getItem(`${key}`)!);
            }

            return (
              <ListCard key={key} onClick={() => goToUpdate(key)}>
                <CheckBox
                  type="checkbox"
                  name={item.title}
                  defaultChecked={checked ? checked.key : null}
                  onClick={(e) => handleChecked(e, key)}
                  readOnly
                />
                <TextBox>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.description}</CardText>
                  {selectedDays ? (
                    <CardText>
                      {selectedDays?.map((day, idx) => {
                        return idx === selectedDays.length - 1
                          ? `${day[0]}`
                          : `${day[0]}, `;
                      })}
                      요일 반복
                    </CardText>
                  ) : (
                    <CardText>한번만 보이는 할 일이에요.</CardText>
                  )}
                </TextBox>
                <DeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteQuery.mutate(key);
                  }}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{
                      cursor: 'pointer',
                      position: 'absolute',
                      top: '2px',
                      right: '10px',
                      color: '#e52d58',
                    }}
                    size="2xl"
                  />
                </DeleteButton>
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
  height: 230px;
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

const DeleteButton = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  border: none;
`;
