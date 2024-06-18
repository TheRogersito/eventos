import { Text, View } from "react-native";
import styled from "styled-components";
import { Link } from "expo-router";

export const Container = styled(View)`
    margin: 10px;
    height: 100%;
    position: relative;
`

export const Title = styled(Text)`
    font-size: 30px;
    text-align: center;
`

export const NewEventLink = styled(Link)`
    position: absolute;
    bottom: 50px;
    right: 0;
    padding: 10px;
    font-size: 20px;
    border-radius: 99px;
    border: 1px solid black;
    background-color: white;
`