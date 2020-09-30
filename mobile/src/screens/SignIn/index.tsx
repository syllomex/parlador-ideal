import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import Button from "../../components/Button";
import InputBlock from "../../components/InputBlock";
import Link from "../../components/Link";
import TitleRight from "../../components/TitleRight";

import { ActionsContainer } from "./styles";

import logo_large from "../../assets/images/icons/logo_large.png";
import Wrapper from "../../components/Wrapper";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { useProfile } from "../../contexts/profile";
import ResponseError from "../../components/Responses";

const SignIn: React.FC = () => {
  const { profile, setProfile } = useProfile();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const { navigate } = useNavigation();

  function showError(message: string) {
    setError(message);
    setFetching(false);
  }

  async function handleSubmit() {
    setFetching(true);
    try {
      if (fields.email === "" || fields.password === "")
        return showError("Preencha todos os campos.");

      const response = await api.post("/auth", fields);
      setProfile(response.data);
    } catch (error) {
      const message = error.response.data.message;

      if (message === "user not found")
        return showError("E-mail não cadastrado.");
      else if (message === "invalid param: password")
        return showError("Senha incorreta.");
      else return showError(`Erro inesperado: ${message}`);
    }
    setFetching(false);
  }

  useEffect(() => {
    if (profile) navigate("Posts");
  }, [profile]);

  return (
    <Wrapper>
      <TitleRight />

      <InputBlock
        label="E-mail"
        fieldName="email"
        state={fields}
        setState={setFields}
        input={{
          autoFocus: true,
          textContentType: "emailAddress",
          keyboardType: "email-address",
        }}
      />

      <InputBlock
        label="Senha"
        fieldName="password"
        state={fields}
        setState={setFields}
        input={{ textContentType: "password", secureTextEntry: true }}
      />

      <ResponseError>{error}</ResponseError>

      <ActionsContainer>
        <Link onPress={() => navigate("SignUp")}>Cadastrar-se</Link>
        <Button style={{ opacity: fetching ? 0.6 : 1 }} onPress={handleSubmit}>
          Entrar
        </Button>
      </ActionsContainer>

      <Image source={logo_large} />
    </Wrapper>
  );
};

export default SignIn;
