import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  border-radius: 10px;
  background-color: white;
`;

export const PosterImage = styled.Image`
  height: 230px;
  margin: 10px;
`;

export const Row = styled.View`
  ${props =>
    !props.lager &&
    css`
      height: 40px;
    `};

  border: 1px solid #eaeaea;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  margin: 1px 10px;
  flex: 1;
`;

export const Desc = styled.Text`
  padding: 0 5px;
  flex: 5;

  ${props =>
    props.desc
      ? css`
          color: black;
          text-transform: uppercase;
        `
      : css`
          color: gray;
          /* padding: 10px; */
        `}
`;
