import { View, Text } from "react-native";
import styled from "styled-components";
import { Link } from "expo-router";

export const ProfileBox = styled(View)`
position: absolute;
padding: 8px;
top: 25%;
left: 15%;
height: 50%;
width: 70%;
background-color: lightblue;
border: 1px solid;
border-radius: 16px;
`
export const ProfileBackLink = styled(Link)`
position: absolute;
top:6%;
left: 5%;
width: 100px;
aspect-ratio: 2/1;
border-radius: 90px;
font-size: 20px;
text-align: center;
border: 1px solid;
padding: 10px;
`
export const ProfileTitle = styled(Text)`
font-size: 28px;
text-align: center;
margin: 12px;
`
export const ProfileSection = styled(Text)`
font-size: 16px;
margin: 12px
`