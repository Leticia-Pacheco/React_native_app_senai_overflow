import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
    width: 96%;
    border-radius: 4px;
    border-width: 2px;
    border-color: ${({disabled}) => disabled ? colors.darkGray : colors.light}; /*Caso o botão esteja desabilitado, fica de uma cor, caso contrário, fica outra*/
    padding: 10px;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.light};
`;