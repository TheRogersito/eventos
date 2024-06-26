import styled from "styled-components";
import { Text, View } from "react-native";

export const EventTitle = styled(Text)`
text-align: center;
font-size: 28px;
`

export const AttendantsTitle = styled(Text)`
text-align: center;
font-size: 20px;
margin-top: 8px;
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