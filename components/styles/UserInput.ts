import { Text, TextInput } from "react-native";
import styled from "styled-components";

export const Input = styled(TextInput) <{
    hasFocus: boolean
}>`
    border: ${props => props.hasFocus ? '2px' : '1px'} solid black;
    border-radius: 10px;
    height: 40px;
    padding: 10px;
`

export const Label = styled(Text) <{
    hasFocus: boolean
}>`
    font-weight: ${props => props.hasFocus ? 600 : 400};
`