import React from "react";
import { TextInputProps } from "react-native";
import { Container, Input, Label } from "./style";

interface IProps {
  label: string;
  input?: TextInputProps;
  state: any;
  setState: React.Dispatch<any>;
  fieldName: string;
}

const InputBlock: React.FC<IProps> = ({
  label,
  input,
  fieldName,
  state,
  setState,
}) => {
  function handleChangeText(text: string) {
    setState((state: any) => ({ ...state, [fieldName]: text }));
  }

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={state[fieldName]}
        onChangeText={handleChangeText}
        {...input}
      />
    </Container>
  );
};

export default InputBlock;
