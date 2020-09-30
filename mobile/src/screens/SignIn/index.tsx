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

const SignIn: React.FC = () => {
  const { profile, setProfile } = useProfile();

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const { navigate } = useNavigation();

  async function handleSubmit() {
    try {
      if (fields.email === "" || fields.password === "") return;

      const response = await api.post("/auth", fields);
      setProfile(response.data);
    } catch (error) {
      console.log(error.response.status, error.response.data.message);
    }
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

      <ActionsContainer>
        <Link onPress={() => navigate("SignUp")}>Cadastrar-se</Link>
        <Button onPress={handleSubmit}>Entrar</Button>
      </ActionsContainer>

      <Image source={logo_large} />
    </Wrapper>
  );
};

export default SignIn;
