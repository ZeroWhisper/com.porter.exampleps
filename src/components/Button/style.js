import styled, { css } from 'styled-components/native';
import { colors } from '~/styles';

export const BoxShadow = styled.View`
  height: 60px;

  ${props =>
    props.fullWidth
      ? css`
          width: 100%;
        `
      : css`
          flex: 1;
          margin: 5px;
        `};

  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: ${colors.status.primary};
`;

export const Container = styled.TouchableOpacity``;
