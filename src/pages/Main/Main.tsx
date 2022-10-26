import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getNewsList } from '../../api/newsApi';
import NotFound from '../../components/NotFound/NotFound';
import Loading from '../../components/Loading/Loading';
import News from './components/News/News';
import TodoList from './components/TodoList/TodoList';

const Main = () => {
  const { data, isLoading, isError } = useQuery(['getNewsList'], () =>
    getNewsList()
  );

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;

  const date = new Date();
  const todayDate = date.getDate();
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
  const todayDay = WEEKDAY[date.getDay()];

  return (
    <Wrap>
      <MainBox>
        <TodoHeader>
          <HeaderTitle>News TO-DO !</HeaderTitle>
          <HeaderDate>
            오늘은 {todayDate}일 {todayDay}요일이에요
          </HeaderDate>
        </TodoHeader>
        <News data={data} />
        <TodoList />
        <AddTodoButton>할 일 추가</AddTodoButton>
      </MainBox>
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  width: 100%;
`;

export const MainBox = styled.div`
  width: 400px;
  height: 700px;
  background-color: ${({ theme }) => theme.mainColor};
  margin: 100px auto;
  border: 3px solid black;
  position: relative;
  z-index: 10;
`;

export const TodoHeader = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 600;
  padding: 30px;
`;

const HeaderTitle = styled.span``;
const HeaderDate = styled.span`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 400;
`;

const AddTodoButton = styled.button`
  width: 350px;
  height: 30px;
  background-color: yellow;
  border: none;
  margin: 0 25px;
  font-size: 22px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  position: fixed;
  bottom: 45px;
`;
