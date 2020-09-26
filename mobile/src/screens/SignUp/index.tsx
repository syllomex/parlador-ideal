import React, { useState } from "react";
import Button from "../../components/Button";
import InputBlock from "../../components/InputBlock";
import Link from "../../components/Link";
import Title from "../../components/Title";
import TitleRight from "../../components/TitleRight";
import Wrapper from "../../components/Wrapper";

import { ActionsContainer } from "./styles";

const SignUp: React.FC = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  return (
    <Wrapper>
      <TitleRight />

      <Title style={{ alignSelf: "flex-start", marginBottom: 28 }}>
        Criar conta
      </Title>

      <InputBlock
        label="Nome completo"
        fieldName="name"
        state={fields}
        setState={setFields}
      />

      <InputBlock
        label="E-mail"
        fieldName="email"
        state={fields}
        setState={setFields}
        input={{ textContentType: "emailAddress" }}
      />

      <InputBlock
        label="Senha"
        fieldName="password"
        state={fields}
        setState={setFields}
        input={{ textContentType: "password", secureTextEntry: true }}
      />

      <InputBlock
        label="Confirmar senha"
        fieldName="password_confirm"
        state={fields}
        setState={setFields}
        input={{ textContentType: "password", secureTextEntry: true }}
      />

      <ActionsContainer>
        <Link>Já tenho uma conta</Link>
        <Button>Criar conta</Button>
      </ActionsContainer>
    </Wrapper>
  );
};

export default SignUp;
