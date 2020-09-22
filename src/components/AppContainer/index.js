import React from 'react';
//import * as Redux from 'react-redux';
import { SafeAreaView } from 'react-native';

import * as S from './style';

const AppContainer = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default AppContainer;
