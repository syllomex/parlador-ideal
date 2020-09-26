import React, { useState } from "react";
import { Image } from "react-native";
import Button from "../../components/Button";
import InputBlock from "../../components/InputBlock";
import Link from "../../components/Link";
import TitleRight from "../../components/TitleRight";

import { ActionsContainer } from "./styles";

import logo_large from "../../assets/images/icons/logo_large.png";
import Wrapper from "../../components/Wrapper";
import { useNavigation } from "@react-navigation/native";

const SignIn: React.FC = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const { navigate } = useNavigation();

  return (
    <Wrapper>
      <TitleRight />

      <InputBlock
        label="E-mail"
        fieldName="email"
        state={fields}
        setState={setFields}
        input={{ autoFocus: true, textContentType: "emailAddress" }}
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
        <Button onPress={() => navigate("Posts")}>Entrar</Button>
      </ActionsContainer>

      <Image source={logo_large} />
    </Wrapper>
  );
};

export default SignIn;
