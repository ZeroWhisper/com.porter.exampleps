import React from 'react';

import * as S from './style';

function Text({ children, title }) {
  return (
    <S.Container>
      <S.ShowText title={title}>{children}</S.ShowText>
    </S.Container>
  );
}

export default Text;
