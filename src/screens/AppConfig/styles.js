import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 400px;
  background-color: #1e222b;
  padding: 16px;
`;

export const Img = styled.Image`
  height: 120px;
  width: 120px;
  margin: 0 auto;
  margin-top: 64px;
`;

export const Title = styled.Text`
  margin-top: 24px;
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bold;
`;

export const Label = styled.Text`
  text-align: center;
  font-size: 20px;
  color: grey;
`;

export const ViewProfile = styled.Text`
  color: #10c86e;
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
`;

export const Help = styled.Text`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #10c86e;
  font-weight: bold;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity``;

export const MyAccountText = styled.Text`
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: grey;
  font-weight: bold;
  font-size: 18px;
`;
