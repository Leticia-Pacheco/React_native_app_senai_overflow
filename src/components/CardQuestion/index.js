import React from "react";
import {
  Container,
  CardHeader,
  ImageProfile,
  HeaderContent,
  TextPoster,
  TextDate,
  TextTitle,
  TextDescription,
  ImageQuestion,
  CardBody,
  CardFooter,
  ContainerInputAnswer,
  InputAnswer,
  SendIcon,
  ContainerAnswer,
} from "./styles";
import fotoPerfil from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";

function CardAnswer () {
  return(
    <ContainerAnswer>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>Por Letícia</TextPoster>
          <TextDate>em 03-03-2021 às 15:00</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription>
          Descrição da resposta
        </TextDescription>
      </CardBody>
    </ContainerAnswer>
  );
}

function CardQuestion() {
  return (
    <Container>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>Por Letícia</TextPoster>
          <TextDate>em 03-03-2021 às 15:00</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle>Título da questão</TextTitle>
        <TextDescription>A descrição da questão fica aqui</TextDescription>
        <ImageQuestion style={{resizeMode: "contain"}} source={fotoPerfil} />
      </CardBody>
      <CardFooter>
        <TextPoster>Seja o primeiro a responder</TextPoster>

        <ContainerInputAnswer>
          <InputAnswer placeholder="Responda a essa pergunta"
          placeholderTextColor={colors.lightTransparent} />
          <SendIcon name="paper-plane" color={colors.primary} />
        </ContainerInputAnswer>
      </CardFooter>
    </Container>
  );
}

export default CardQuestion;