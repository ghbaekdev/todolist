export interface TodoDataType {
  data: {
    title: string;
    description: string;
    days: {
      일: boolean;
      월: boolean;
      화: boolean;
      수: boolean;
      목: boolean;
      금: boolean;
      토: boolean;
    };
  };
}

export interface TodoFormType extends TodoDataType {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleRepeat: (day: any, value: any) => void;
}

export interface FormType {
  id?: number;
  title: string;
  description: string;
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
