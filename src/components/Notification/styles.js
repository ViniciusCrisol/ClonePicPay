import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  padding: 0 32px;
`;

export const NotificationContainer = styled.View`
  margin: 6px 0;
  height: 140px;
  background-color: #1e222b;
  border-radius: 8px;
  padding: 16px;
`;

export const NotificationText = styled.Text`
  color: white;
  font-size: 14px;
`;

export const NotificationFooter = styled.View`
  margin-top: 60px;
`;

export const NotificationDate = styled.Text`
  color: #888;
`;
