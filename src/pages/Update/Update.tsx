import * as S from '../Main/Main';
import * as D from '../Add/Add';
import * as api from '../../lib/api/todoApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TodoForm from '../../components/TodoForm/TodoForm';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import useMutationQuery from '../../hooks/useMutationQuery';
import { useQuery } from '@tanstack/react-query';
import useForm from '../../hooks/useForm';

const Update = () => {
  // const [updateForm, setUpdateForm] = useState({
  //   id: 0,
  //   title: '',
  //   description: '',
  //   days: {
  //     일: false,
  //     월: false,
  //     화: false,
  //     수: false,
  //     목: false,
  //     금: false,
  //     토: false,
  //   },
  // });
  const navigate = useNavigate();

  const location = useLocation();

  const key = location.state.key;

  const { mutate, isLoading, isError } = useMutationQuery(api.updateTodo);

  const updateQuery = () => {
    mutate(form, key);
    navigate('/');
  };

  const todo = useQuery(['detailList'], () =>
    api.detailTodo(location.state.key)
  );

  const { handleInput, handleTextArea, handleRepeat, form } = useForm(
    todo.data
  );

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
      {form && (
        <TodoForm
          data={form}
          handleInput={handleInput}
          handleTextArea={handleTextArea}
          handleRepeat={handleRepeat}
        />
      )}

      <UpdateButton onClick={updateQuery}>할 일 수정</UpdateButton>
    </PutTodoBox>
  );
};

export default Update;

const PutTodoBox = styled(S.MainBox)``;

const PutTodoHeader = styled(D.AddTodoHeader)``;

const UpdateButton = styled(S.AddTodoButton)`
  margin-top: 230px;
`;
