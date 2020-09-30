import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import Button from "../../components/Button";
import EditablePostCard from "../../components/EditablePostCard";
import Link from "../../components/Link";
import Title from "../../components/Title";
import Wrapper from "../../components/Wrapper";
import { useProfile } from "../../contexts/profile";
import { confirmationAlert } from "../../handlers/confirmationAlert";
import { api } from "../../services/api";

import { ActionsContainer, Container, TitleContainer } from "./styles";

const EditPost: React.FC = () => {
  const { profile } = useProfile();
  const { navigate } = useNavigation();
  const { params }: any = useRoute();

  const [content, setContent] = useState(params?.content || "");

  const handlePressDelete = confirmationAlert({
    title: "Excluir publicação",
    message: "Tem certeza que deseja excluir essa publicação?",
    onConfirm: handleDelete,
  }).handler;

  async function handleSubmit() {
    if (content === "") return;
    
    try {
      await api.put(
        "/posts/" + params.id,
        { content },
        {
          headers: {
            Authorization: `Bearer ${profile?.token}`,
          },
        }
      );
      navigate("Posts");
    } catch (error) {
      console.log(error.response.status, error.response.data.message);
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`/posts/${params.id}`, {
        headers: { Authorization: `Bearer ${profile?.token}` },
      });
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
            Editar
          </Title>
        </TitleContainer>

        <EditablePostCard
          name={params?.name}
          content={content}
          onChangeContent={setContent}
        />

        <ActionsContainer>
          <Button onPress={handleSubmit}>Salvar</Button>
          <Link onPress={() => navigate("Posts")}>Voltar</Link>

          <Link danger style={{ marginTop: 10 }} onPress={handlePressDelete}>
            Excluir publicação
          </Link>
        </ActionsContainer>
      </Container>
    </Wrapper>
  );
};

export default EditPost;
