import React from 'react';

import { shadow } from '~/styles/style';
import Text from '../Text';

import * as S from './style';

function Button(props) {
  const { children, onPress, fullWidth, disabled } = props;

  return (
    <S.BoxShadow style={shadow} fullWidth={fullWidth} disabled={disabled}>
      <S.Container onPress={onPress} disabled={disabled}>
        <Text>{children}</Text>
      </S.Container>
    </S.BoxShadow>
  );
}

export default Button;
