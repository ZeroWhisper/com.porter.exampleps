import styled, { css } from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
`;
export const ShowText = styled.Text`
  /* color: ${colors.darker}; */
  color: white;
  font-size: 16px;

  ${props =>
    props.title &&
    css`
      color: #999;
      font-size: 25px;
    `}
`;
