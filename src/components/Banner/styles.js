import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #6882bb;
  margin: 24px 16px;
  border-radius: 8px;
  height: 150px;
  flex-direction: row;
  padding: 16px;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Img = styled.Image``;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: white;
  font-size: 14px;
  margin-top: 16px;
`;
