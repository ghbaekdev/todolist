import React from 'react';
import styled from 'styled-components';

const TodoList = () => {
  return (
    <TodoWrap>
      <TodoTitle>오늘의 할 일</TodoTitle>
      <ListBox></ListBox>
    </TodoWrap>
  );
};

export default TodoList;

const TodoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;

const TodoTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const ListBox = styled.div``;
