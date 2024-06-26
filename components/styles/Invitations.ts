import { View, Text } from 'react-native';
import styled from 'styled-components';
import { Link } from 'expo-router';

export const InvitationsBox = styled(View)`
padding: 8px;
left: 15%;
height: 75px;
width: 70%;
margin-top: 8px;
background-color: lightblue;
border: 1px solid;
border-radius: 16px;
`
export const InvitationsBackLink = styled(Link)`
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
export const InvitationsTitle = styled(Text)`
font-size: 28px;
text-align: center;
margin-top: 96px;
`