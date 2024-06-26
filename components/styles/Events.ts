import { Text, View } from "react-native";
import styled from "styled-components";
import { Link } from "expo-router";

export const Container = styled(View)`
    margin-top: 100px;
    height: 100%;
    position: relative;
`

export const ProfileLink = styled(Link)`
    position: absolute;
    top:50px;
    right:10px;
    height: 40px;
    aspect-ratio: 1/1;
    border: 1px solid;
    border-radius: 99px;
    padding: 8px;
    text-align: center;
    font-size: 16px;
    z-index: 2;
`

export const Title = styled(Text)`
    font-size: 30px;
    text-align: center;
`

export const NewEventLink = styled(Link)`
    position: absolute;
    bottom: 70px;
    right: 0;
    padding: 10px;
    font-size: 20px;
    border-radius: 99px;
    border: 1px solid black;
    background-color: white;
`

export const InvitationsLink = styled(Link)`
    position: absolute;
    bottom: 70px;
    left: 0;
    padding: 10px;
    font-size: 20px;
    border-radius: 99px;
    border: 1px solid black;
    background-color: white;
    display: 'none';
`