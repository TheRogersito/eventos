import styled from "styled-components";
import { View, Text, Pressable } from "react-native";

export const EventWrapper = styled(View)`
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin: 5px 0;
`

export const EventText = styled(Text)`
    font-size: 18px;
`

export const EventPress = styled(Pressable)`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
`