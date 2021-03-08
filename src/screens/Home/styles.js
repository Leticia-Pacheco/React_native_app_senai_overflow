import styled from "styled-components/native";
import colors from "../../styles/colors";
import { StatusBar } from "react-native";
import { TextDefault } from "../../styles/stylesGlobal";
import { FaSignOutAlt } from "react-icons/fa";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.dark};
    padding-top: ${StatusBar.currentHeight}px;
`;

export const ToolBar = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-content: space-between;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    border-bottom-width: 1px;
    border-bottom-color: ${colors.light};
`;

export const TextToolBar = styled(TextDefault)`
    flex: 1;
    font-size: 20px;
    color: ${colors.light};
    font-weight: bold;
    text-align: center;
`;

export const IconSignOut = styled(FaSignOutAlt)`
    font-size: 5px;

    cursor: pointer;

    transition: 0.2s;
`;