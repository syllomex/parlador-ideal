import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import EditablePostCard from "../../components/EditablePostCard";
import Link from "../../components/Link";
import Title from "../../components/Title";
import Wrapper from "../../components/Wrapper";

import { ActionsContainer, Container, TitleContainer } from "./styles";

const NewPost: React.FC = () => {
  const { navigate } = useNavigation();

  const [content, setContent] = useState("");

  useEffect(() => {
    // TODO: send content to API
  }, [content]);

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
          <Button>Publicar</Button>
          <Link onPress={() => navigate("Posts")}>Voltar</Link>
        </ActionsContainer>
      </Container>
    </Wrapper>
  );
};

export default NewPost;
