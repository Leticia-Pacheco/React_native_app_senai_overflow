import React, { useState } from "react";
import {
  Container,
  CardHeader,
  ImageProfile,
  HeaderContent,
  TextPoster,
  TextDate,
  CardBody,
  TextTitle,
  TextDescription,
  ImageQuestion,
  CardFooter,
  ContainerInputAnswer,
  InputAnswer,
  SendIcon,
  ContainerAnswer,
} from "./styles";
import fotoPerfil from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";
import { FlatList, Touchable, TouchableOpacity } from "react-native";

function CardAnswer({ answer }) {
  return (
    <ContainerAnswer>
      <CardHeader>
        <ImageProfile
          source={
            answer.Student.image ? { uri: answer.Student.image } : fotoPerfil
          }
        />
        <HeaderContent>
          <TextPoster> Por {answer.Student.name} </TextPoster>
          <TextDate> em {answer.created_at} </TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription> {answer.description} </TextDescription>
      </CardBody>
    </ContainerAnswer>
  );
}

function CardQuestion({ question }) {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <Container>
      <CardHeader>
        <ImageProfile
          source={
            question.Student.image
              ? { uri: question.Student.image }
              : fotoPerfil
          }
        />
        <HeaderContent>
          <TextPoster> {question.Student.name} </TextPoster>
          <TextDate> {question.created_at} </TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle> {question.title} </TextTitle>
        <TextDescription> {question.description} </TextDescription>
        {question.image && (
          <ImageQuestion
            style={{ resizeMode: "contain" }}
            source={{ uri: question.image }}
          />
        )}
      </CardBody>
      <CardFooter>
        <TouchableOpacity onPress={() => setShowAnswers(!showAnswers)}>
          <TextPoster>
            {question.Answers.length === 0
              ? "Seja o primeiro a responder"
              : question.Answers.length + "respostas"}
          </TextPoster>
        </TouchableOpacity>
        {showAnswers && question.Answers.length > 0 && (
          <FlatList
            data={question.Answers}
            keyExtractor={(answer) => String(answer.id)}
            renderItem={({ item: answer }) => <CardAnswer answer={answer} />}
          />
        )}

        <ContainerInputAnswer>
          <InputAnswer
            placeholder="Responda essa pergunta"
            placeholderTextColor={colors.lightTransparent}
          />
          <SendIcon name="paper-plane" placeholderTextColor={colors.light} />
        </ContainerInputAnswer>
      </CardFooter>
    </Container>
  );
}

export default CardQuestion;
