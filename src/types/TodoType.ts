export interface TodoTestType {
  id?: number;
  title: string;
  description: string;
  checked?: boolean;
  days: {
    일: boolean;
    월: boolean;
    화: boolean;
    수: boolean;
    목: boolean;
    금: boolean;
    토: boolean;
  };
}
export interface TodoDataType {
  data: TodoTestType;
}

export interface TodoFormType extends TodoDataType {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleRepeat: (day: string, value: boolean) => void;
}

export interface FormType {
  id?: number;
  title: string;
  description: string;
  checked?: boolean;
  days: {
    일: boolean;
    월: boolean;
    화: boolean;
    수: boolean;
    목: boolean;
    금: boolean;
    토: boolean;
  };
}

export interface TodoListType {
  id: number;
  title: string;
  description: string;
  checked?: boolean;
  days: {
    일: boolean;
    월: boolean;
    화: boolean;
    수: boolean;
    목: boolean;
    금: boolean;
    토: boolean;
  };
}
