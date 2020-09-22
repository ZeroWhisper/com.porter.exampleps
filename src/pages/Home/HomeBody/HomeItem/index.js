import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Redux from 'react-redux';

import { Creators as DetailCreators } from '~/store/ducks/detail';
import { getUri } from '~/util';

import * as S from './style';

function HomeItem({ item }) {
  const dispatch = Redux.useDispatch();
  const navigation = useNavigation();

  // const [collapsed, setCollapsed] = React.useState(true);

  function redirect() {
    const obj = {
      key: 'selected',
      value: item,
    };

    dispatch(DetailCreators.setRequest(obj));
    navigation.push('Details');
  }

  return (
    <S.Container>
      <S.BtnCollapse onPress={redirect}>
        <S.ImgBackground
          resizeMode={'cover'}
          source={getUri(item.backdrop_path)}
        >
          <S.Title>{item.title}</S.Title>
        </S.ImgBackground>
      </S.BtnCollapse>
    </S.Container>
  );
}

export default HomeItem;
