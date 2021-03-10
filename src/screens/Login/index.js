import React, { useState } from "react";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { StatusBar, Alert } from "react-native";
import colors from "../../styles/colors";
import { Content, TextInputLogin, Label } from "./styles";
import Button from "../../components/Button";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

function Login({ navigation }) {
  StatusBar.setBackgroundColor(colors.light);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    setLogin({ ...Login, email: e });
  };

  const handlePassord = (e) => {
    setLogin({ ...Login, password: e });
  };

  const handleSubmit = async () => {
    try {

      const response = await api.post("/sessions", login);

      signIn(response.data);

      navigation.navigate("Home");

    } catch (error) {
      console.log(error);
      if (error.response) {
        Alert.alert("Ops!", error.response.data.error);
      }
    }
  };

  return (
    <Container>
      <ToolBar>
        <TextToolBar> Faça Login </TextToolBar>
      </ToolBar>
      <Content>
        <Label>E-mail</Label>
        <TextInputLogin
          autoCompleteType="email"
          placeholder="Digite seu email"
          placeholderTextColor={colors.lightTransparent}
          onChangeText={handleEmail}
        />
        <Label>Senha</Label>
        <TextInputLogin
          autoCompleteType="password"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          placeholderTextColor={colors.lightTransparent}
          onChangeText={handlePassord}
        />
        <Button
          handlePress={handleSubmit}
          text="Entrar"
          disabled={login.email === "" || login.password === ""}
        />
      </Content>
    </Container>
  );
}

export default Login;
