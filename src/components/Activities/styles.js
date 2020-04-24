import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 24px;
  padding: 0 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerTags = styled.View`
  flex-direction: row;
`;

export const Tag = styled.Text`
  margin: 0 3px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-bottom-width: 2px;
  border-bottom-color: #10c86e;
`;

export const Card = styled.View`
  background-color: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 14px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: white;
  font-size: 20px;
`;

export const CardFooter = styled.View`
  margin-top: 14px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 2px;
  height: 12px;
  margin: 0 8px;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const Date = styled.Text`
  color: white;
  margin-left: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
`;

export const OptionLabel = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 5px;
`;
