import styled from "styled-components";
import { TextInput, View, Text, Pressable } from "react-native";

export const GrayBox = styled(View)`
background-color: lightgray;
border-radius: 16px;
padding: 16px;
text-align: center;
font-size: 3rem;
`
export const RegisterTitle = styled(Text)`
text-align: center;
font-size: 26px;
`

export const InputLogin = styled(TextInput)`
width: 200px;
height: 25px;
border: 1px solid;
margin: 4px;
`

export const LoginButton = styled(Pressable)`
border-radius: 16px;
border: 1px solid;
text-align: center;
margin: 4px;
padding: 4px;
`