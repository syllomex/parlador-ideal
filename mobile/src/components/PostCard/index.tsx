import React from "react";
import moment from "moment";

import { Container, Content, Date, Name } from "./styles";

interface IProps {
  name: string;
  isOwner: boolean;
  content: string;
  date: Date;
}

const PostCard: React.FC<IProps> = ({ name, isOwner, content, date }) => {
  let dateStr = moment(date).locale("pt-br").format("LLL");

  return (
    <Container isOwner={isOwner}>
      <Name>{name}</Name>
      <Content>{content}</Content>
      <Date>{dateStr}</Date>
    </Container>
  );
};

export default PostCard;
