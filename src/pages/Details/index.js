import React from 'react';
import * as Redux from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import AppContainer from '~/components/AppContainer';
import Text from '~/components/Text';

import DetailBody from './DetailBody';

function Details() {
  const { selected } = Redux.useSelector(state => state.detail);
  const navigation = useNavigation();

  if (!selected) {
    navigation.goBack();
  }

  return (
    <AppContainer>
      <Text title>{selected && selected.title}</Text>
      <DetailBody />
    </AppContainer>
  );
}

export default Details;
