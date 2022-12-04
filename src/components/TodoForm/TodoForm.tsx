import React from 'react';
import styled from 'styled-components';
import { WEEKDAYDATA } from '../../lib/data/WEEKDAY';
import { TodoFormType } from '../../types/TodoType';

const TodoForm = (props: TodoFormType) => {
  const { handleInput, handleTextArea, handleRepeat, data } = props;

  return (
    <Form>
      <span>제목</span>
      <TitleInput name="title" onChange={handleInput} value={data.title} />
      <span>설명</span>
      <DescriptionInput
        name="description"
        onChange={handleTextArea}
        value={data.description}
      />
      <span>반복</span>
      <RepeatOptionsBox>
        {Object.keys(WEEKDAYDATA).map((day: string) => {
          return (
            <SelectedButton
              onClick={(e) => {
                e.preventDefault();
                handleRepeat(day, !data.days[day]);
              }}
              key={day}
              selected={data.days[day]}>
              {day}
            </SelectedButton>
          );
        })}
      </RepeatOptionsBox>
    </Form>
  );
};

export default TodoForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  span {
    font-weight: 600;
  }
  input {
    border: 2px solid black;
    border-radius: 10px;
  }
  textarea {
    border: 2px solid black;
    border-radius: 10px;
  }
`;

const TitleInput = styled.input`
  height: 26px;
  margin: 5px 0 20px 0;
`;

const DescriptionInput = styled.textarea`
  height: 130px;
  margin: 10px 0 20px 0;
  resize: none;
`;

const RepeatOptionsBox = styled.div`
  background-color: white;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 20px;
`;

const SelectedButton = styled.button<{ selected: boolean }>`
  background: ${({ selected }) => (selected ? '#edd81e' : '#e0e3e6')};
  height: 30px;
  color: ${({ theme }) => theme.white};
  border: none;
  margin: 5px;
  width: 31px;
  border-radius: 15px;
  cursor: pointer;
`;
