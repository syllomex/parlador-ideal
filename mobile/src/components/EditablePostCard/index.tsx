import React, { useState } from "react";

import { Container, Name, Content, CharacterCounter } from "./styles";

interface IProps {
  name: string;
  content?: string;
  onChangeContent?: React.Dispatch<any>;
}

const EditablePostCard: React.FC<IProps> = ({
  name,
  content: prop_content,
  onChangeContent,
}) => {
  const [content, setContent] = useState(prop_content || "");

  function handleChangeText(text: string) {
    setContent(text);
    onChangeContent && onChangeContent(text);
  }

  return (
    <Container>
      <Name>{name}</Name>
      <Content
        maxLength={280}
        onChangeText={handleChangeText}
        value={content}
        multiline
        numberOfLines={3}
        underlineColorAndroid="transparent"
        autoFocus
        placeholder="Compartilhe sua ideia ou pensamento!"
      />
      <CharacterCounter>{content.length}/280</CharacterCounter>
    </Container>
  );
};

export default EditablePostCard;
