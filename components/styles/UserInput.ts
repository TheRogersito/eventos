import { Text, TextInput } from "react-native";
import styled from "styled-components";

export const Input = styled(TextInput) <{
    hasFocus: boolean,
    numberOfLines: number
}>`
    border: ${props => props.hasFocus ? '2px' : '1px'} solid black;
    border-radius: 10px;
    height: calc(40px * ${props => props.numberOfLines});
    padding: 10px;
    align-items: start;
    justify-content: start;
`

export const Label = styled(Text) <{
    hasFocus: boolean
}>`
    font-weight: ${props => props.hasFocus ? 600 : 400};
`