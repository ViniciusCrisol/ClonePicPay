import styled from "styled-components/native";

export const Container = styled.View`
  background-color: black;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const InputHeader = styled.TextInput`
  flex: 1;
  padding: 4px 12px;
  margin: 0 24px;
  border-radius: 20px;
  background-color: white;
`;

export const ContactsContainer = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const LabelContact = styled.Text`
  margin-bottom: 4px;
  color: white;
  margin-top: 24px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;
