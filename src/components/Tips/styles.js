import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  SowHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  margin-top: 24px;
`;

export const Option = styled.TouchableOpacity`
  background-color: ${({ bgColor }) => bgColor};
  width: 150px;
  height: 220px;
  border-radius: 8px;
  padding: 15px;
  margin-right: 16px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;
