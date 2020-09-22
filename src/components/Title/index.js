import React from 'react';
import styled from 'styled-components/native';

import Text from '../Text';

const ShowText = styled(Text)`
  /* flex: 1; */
  height: 120px;

  color: gray;

  border: 1px solid black;

  justify-content: center;
  align-items: center;
`;

function Title({ title }) {
  return <ShowText>{title}</ShowText>;
}

export default Title;
