import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Button from "../../components/Button";
import EditablePostCard from "../../components/EditablePostCard";
import Link from "../../components/Link";
import Title from "../../components/Title";
import Wrapper from "../../components/Wrapper";
import { useProfile } from "../../contexts/profile";
import { api } from "../../services/api";

import { ActionsContainer, Container, TitleContainer } from "./styles";

const NewPost: React.FC = () => {
  const { profile } = useProfile();
  const { navigate } = useNavigation();

  const [content, setContent] = useState("");

  async function handleSubmit() {
    try {
      await api.post(
        "/posts",
        { content },
        { headers: { Authorization: `Bearer ${profile?.token}` } }
      );
      navigate("Posts");
    } catch (error) {
      console.log(error.response.status, error.response.data.message);
    }
  }

  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title withIcon iconSize="medium" navigateTo="Posts">
            Publicar
          </Title>
        </TitleContainer>

        <EditablePostCard name="Leonardo Santos" onChangeContent={setContent} />

        <ActionsContainer>
          <Button onPress={handleSubmit}>Publicar</Button>
          <Link onPress={() => navigate("Posts")}>Voltar</Link>
        </ActionsContainer>
      </Container>
    </Wrapper>
  );
};

export default NewPost;
