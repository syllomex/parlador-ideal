import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Button from "../../components/Button";
import InputBlock from "../../components/InputBlock";
import Link from "../../components/Link";
import Title from "../../components/Title";
import TitleRight from "../../components/TitleRight";
import Wrapper from "../../components/Wrapper";

import { ActionsContainer, TitleContainer } from "./styles";

const SignUp: React.FC = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const { navigate } = useNavigation();

  return (
    <Wrapper>
      <TitleRight />

      <TitleContainer>
        <Title>Criar conta</Title>
      </TitleContainer>

      <InputBlock
        label="Nome completo"
        fieldName="name"
        state={fields}
        setState={setFields}
        input={{ autoFocus: true }}
      />

      <InputBlock
        label="E-mail"
        fieldName="email"
        state={fields}
        setState={setFields}
        input={{
          textContentType: "emailAddress",
          autoCapitalize: "none",
          keyboardType: "email-address",
        }}
      />

      <InputBlock
        label="Senha"
        fieldName="password"
        state={fields}
        setState={setFields}
        input={{
          textContentType: "password",
          secureTextEntry: true,
        }}
      />

      <InputBlock
        label="Confirmar senha"
        fieldName="password_confirm"
        state={fields}
        setState={setFields}
        input={{ textContentType: "password", secureTextEntry: true }}
      />

      <ActionsContainer>
        <Link onPress={() => navigate("SignIn")}>Já tenho uma conta</Link>
        <Button>Criar conta</Button>
      </ActionsContainer>
    </Wrapper>
  );
};

export default SignUp;
