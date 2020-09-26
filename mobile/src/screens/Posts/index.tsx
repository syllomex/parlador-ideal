import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import PostCard from "../../components/PostCard";
import Title from "../../components/Title";
import { IconsContainer } from "../../components/Title/styles";
import Wrapper from "../../components/Wrapper";

import { logoutHandler } from "../../handlers/logout";

import {
  Header as StyledHeader,
  IconButton,
  NewPostIcon,
  SignOutIcon,
  PostsContainer,
} from "./styles";

interface IPost {
  id?: string;
  name: string;
  content: string;
  date: Date;
  isOwner: boolean;
}

const mockPosts: IPost[] = [
  {
    name: "Leonardo Santos",
    content:
      "Podemos já vislumbrar o modo pelo qual a execução dos pontos do programa nos obriga à análise das condições financeiras e administrativas exigidas. A certificação de metodologias que nos auxiliam a lidar com o surgimento do comércio virtual faz parte de um processo.",
    date: new Date(),
    isOwner: true,
  },
  {
    name: "John Doe",
    content:
      "É claro que a execução dos pontos do programa causa impacto indireto na reavaliação dos índices pretendidos.",
    date: new Date(),
    isOwner: false,
  },
];

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  async function fetchPosts() {
    setPosts(mockPosts);
  }

  const { navigate } = useNavigation();
  function logout() {
    navigate("SignIn");
  }
  const handlePressLogout = logoutHandler(logout).handler;

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );

  const Header: React.FC = () => {
    return (
      <StyledHeader>
        <Title withIcon>Publicações</Title>
        <IconsContainer>
          <IconButton onPress={handlePressLogout}>
            <SignOutIcon />
          </IconButton>
          <IconButton onPress={() => navigate("NewPost")}>
            <NewPostIcon />
          </IconButton>
        </IconsContainer>
      </StyledHeader>
    );
  };

  return (
    <Wrapper fixedHeader={<Header />}>
      <PostsContainer>
        {posts.map((post: any) => (
          <PostCard
            key={post.id}
            name={post.name}
            content={post.content}
            date={post.date}
            isOwner={post.isOwner}
          />
        ))}
      </PostsContainer>
    </Wrapper>
  );
};

export default Posts;
