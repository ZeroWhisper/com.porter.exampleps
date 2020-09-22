import React from 'react';
import { ActivityIndicator } from 'react-native';

import { colors } from '~/styles';

import * as S from './style';

function Loading() {
  return (
    <S.Container>
      <ActivityIndicator size={'large'} color={colors.status.info} />
    </S.Container>
  );
}

export default Loading;
