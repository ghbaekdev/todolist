import React, { useState } from 'react';
import { FormType } from '../types/TodoType';

const useForm = (data: FormType) => {
  const [form, setForm] = useState(data);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRepeat = (day: string, value: boolean) => {
    setForm((prev) => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: value,
      },
    }));
  };

  return { form, handleInput, handleTextArea, handleRepeat };
};

export default useForm;
