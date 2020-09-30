import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Button from "../../components/Button";
import InputBlock from "../../components/InputBlock";
import Link from "../../components/Link";
import ResponseError from "../../components/Responses";
import Title from "../../components/Title";
import TitleRight from "../../components/TitleRight";
import Wrapper from "../../components/Wrapper";
import { useProfile } from "../../contexts/profile";
import { api } from "../../services/api";

import { ActionsContainer, TitleContainer } from "./styles";

const SignUp: React.FC = () => {
  const { setProfile } = useProfile();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { navigate } = useNavigation();

  function showError(message: string) {
    setFetching(false);
    setError(message);
  }

  async function handleSubmit() {
    if (
      fields.name === "" ||
      fields.email === "" ||
      fields.password === "" ||
      fields.password_confirmation === ""
    ) {
      return showError("Preencha todos os campos.");
    }

    if (fields.password !== fields.password_confirmation)
      return showError("Confirmação de senha não confere.");

    if (fetching) return;
    setFetching(true);

    try {
      await api.post("/users", fields);

      const response = await api.post("/auth", {
        email: fields.email,
        password: fields.password,
      });

      setProfile(response.data);
    } catch (error) {
      const message = error.response.data.message;

      if (message === "duplicated entry: email")
        showError("E-mail já cadastrado.");
      else showError(`Erro inesperado: ${message}`);
    }

    setFetching(false);
  }

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
        fieldName="password_confirmation"
        state={fields}
        setState={setFields}
        input={{ textContentType: "password", secureTextEntry: true }}
      />

      <ResponseError>{error}</ResponseError>

      <ActionsContainer>
        <Link onPress={() => navigate("SignIn")}>Já tenho uma conta</Link>
        <Button style={{ opacity: fetching ? 0.6 : 1 }} onPress={handleSubmit}>
          Criar conta
        </Button>
      </ActionsContainer>
    </Wrapper>
  );
};

export default SignUp;
