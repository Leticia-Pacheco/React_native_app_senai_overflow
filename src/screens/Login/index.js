import React from "react";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { StatusBar } from "react-native";
import colors from "../../styles/colors";
import { Content, TextInputLogin, Label } from "./styles";
import Button from "../../components/Button";

function Login() {
  StatusBar.setBackgroundColor(colors.light);

  return (
    <Container>
      <ToolBar>
        <TextToolBar> Faça Login </TextToolBar>
      </ToolBar>
      <Content>
        <Label>E-mail</Label>
        <TextInputLogin autoCompleteType="email" placeholder="Digite seu email" placeholderTextColor={colors.lightTransparent}/>
        <Label>Senha</Label>
        <TextInputLogin autoCompleteType="password" placeholder="Digite sua senha" secureTextEntry={true} placeholderTextColor={colors.lightTransparent}/>
      
        <Button text="Entrar"/>
      </Content>
    </Container>
  );
}

export default Login;
