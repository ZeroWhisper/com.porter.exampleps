import React from 'react';
import * as Redux from 'react-redux';
import { View, Text } from 'react-native';

import AppContainer from '~/components/AppContainer';
import { Creators } from '~/store/ducks/home';

import * as S from './style';

function Home() {
  return (
    <AppContainer>
      <S.Container>
        <Text>Olá Mundo! Home</Text>
      </S.Container>
    </AppContainer>
  );
}

export default Home;
