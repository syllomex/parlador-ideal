import React from "react";
import moment from "moment";

import { Container, Content, Date, Name, TouchableContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  id: string;
  name: string;
  isOwner: boolean;
  content: string;
  date: Date;
}

const PostCard: React.FC<IProps> = ({ id, name, isOwner, content, date }) => {
  const { navigate } = useNavigation();

  let dateStr = moment(date).locale("pt-br").format("LLL");

  function handlePress() {
    if (isOwner) navigate("EditPost", { id, name, content });
  }

  if (isOwner)
    return (
      <TouchableContainer onPress={handlePress}>
        <Name>{name}</Name>
        <Content>{content}</Content>
        <Date>{dateStr}</Date>
      </TouchableContainer>
    );

  return (
    <Container>
      <Name>{name}</Name>
      <Content>{content}</Content>
      <Date>{dateStr}</Date>
    </Container>
  );
};

export default PostCard;
