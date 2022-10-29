import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getNewsList } from '../../lib/api/newsApi';
import NotFound from '../../components/NotFound/NotFound';
import Loading from '../../components/Loading/Loading';
import News from './components/News/News';
import TodoList from './components/TodoList/TodoList';
import { useNavigate } from 'react-router-dom';
import { WEEKDAY } from '../../lib/data/WEEKDAY';

const Main = () => {
  const navigate = useNavigate();
  const date = new Date();
  const todayDate = date.getDate();
  const todayDay = WEEKDAY[date.getDay()];
  const { data, isLoading, isError } = useQuery(['getNewsList'], () =>
    getNewsList()
  );

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;

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
        <AddTodoButton onClick={() => navigate('/add')}>
          할 일 추가
        </AddTodoButton>
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
  margin: 50px auto;
  border: 3px solid black;
`;

export const TodoHeader = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 600;
  padding: 30px 20px;
`;

const HeaderTitle = styled.span``;
const HeaderDate = styled.span`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 400;
`;

export const AddTodoButton = styled.button`
  width: 350px;
  height: 35px;
  background-color: ${({ theme }) => theme.buttonColor};
  border: none;
  margin: 0 20px;
  font-size: 22px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    background: #e0e3e6;
  }
`;
