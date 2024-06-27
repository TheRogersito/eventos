import styled from "styled-components";
import { Pressable, Text, TextInput, View } from "react-native";

export const EventTitle = styled(Text)`
text-align: center;
font-size: 28px;
`

export const ItemTextInput = styled(TextInput)`
border: 1px solid;
border-radius: 8px;
margin: 0 18px 0 18px;
padding: 4px;
`
export const ItemPressable = styled(Pressable)`
background-color: lightgray;
border-radius: 8px;
border: 1px solid;
margin: 8px auto;
padding: 4px;
display: flex;
justify-content: center;
align-items: center;
width:50%;
`

export const AttendantsTitle = styled(Text)`
text-align: center;
font-size: 20px;
margin: 8px 0 8px;
`

export const AttendantListItem = styled(View)`
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin: 5px 10px 5px 10px;
`

export const ListItem = styled(View)`
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin: 5px 10px 5px 10px;
    background-color: ${({ isUserActive }) => isUserActive ? 'lightgreen' : 'auto'};
`