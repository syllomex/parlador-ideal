import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import EditablePostCard from "../../components/EditablePostCard";
import Link from "../../components/Link";
import Title from "../../components/Title";
import Wrapper from "../../components/Wrapper";

import { ActionsContainer, Container, TitleContainer } from "./styles";

const EditPost: React.FC = () => {
  const { navigate } = useNavigation();
  const { params }: any = useRoute();

  const [content, setContent] = useState(params?.content || "");

  useEffect(() => {
    // TODO: send content to API
  }, [content]);

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
          <Button>Salvar</Button>
          <Link onPress={() => navigate("Posts")}>Voltar</Link>
        </ActionsContainer>
      </Container>
    </Wrapper>
  );
};

export default EditPost;
