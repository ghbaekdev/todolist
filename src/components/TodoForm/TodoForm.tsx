import React, { useState } from 'react';
import styled from 'styled-components';

const TodoForm = () => {
  const [addForm, setAddForm] = useState({
    title: '',
    description: '',
    repeat: {
      일: false,
      월: false,
      화: false,
      수: false,
      목: false,
      금: false,
      토: false,
    },
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  const handleRepeat = (day: string, value: boolean) => {
    // setAddForm({...addForm,addForm.repeat[day]})
    console.log(day);
    console.log(value);
  };

  return (
    <Form>
      <span>제목</span>
      <TitleInput name="title" onChange={handleInput} value={addForm.title} />
      <span>설명</span>
      <DescriptionInput
        name="description"
        onChange={handleTextArea}
        value={addForm.description}
      />
      <span>반복</span>
      <RepeatOptionsBox>
        {Object.entries(addForm.repeat).map((day) => {
          return (
            <>
              {/* {!day[1] ? (
               
              ) : (
                <RepeatButton
                  onClick={() => handleRepeat(day[0], day[1])}
                  key={day[0]}>
                  {day[0]}
                </RepeatButton>
              )} */}
              <SelectedButton onClick={() => console.log(day[0], day[1])}>
                {day[0]}
              </SelectedButton>
            </>
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

const RepeatButton = styled.button`
  background-color: #edd81e;
  height: 30px;
  color: ${({ theme }) => theme.white};
  border: none;
  margin: 5px;
  width: 31px;
  border-radius: 15px;
  cursor: pointer;
`;

const SelectedButton = styled(RepeatButton)`
  background-color: #e0e3e6;
`;
