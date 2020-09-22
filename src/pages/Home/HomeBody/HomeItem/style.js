import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  height: 80px;
  margin: 1px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
  background-color: ${colors.darkTransparent};
`;

export const BtnCollapse = styled.TouchableOpacity``;

export const ImgBackground = styled.ImageBackground`
  justify-content: center;
  align-items: flex-end;
  height: 80px;
  padding: 10px;
`;

export const BoxDetail = styled.View`
  height: 90px;
  padding: 10px;
`;
