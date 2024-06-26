import { TextInput, View } from "react-native";
import styled from "styled-components";

export const Input = styled(TextInput) <{
    hasFocus: boolean
}>`
    border: ${props => props.hasFocus ? '2px' : '1px'} solid black;
    border-radius: 10px;
    height: 40px;
    padding: 10px;
    align-items: start;
    justify-content: start;
`

export const ListWrapper = styled(View)`
    background-color: white;
    border: 1px solid black;
    padding: 5px;
`