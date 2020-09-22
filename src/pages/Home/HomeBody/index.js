import React from 'react';
import * as Redux from 'react-redux';

import Loading from '~/components/Loading';

import * as S from './style';
import HomeItem from './HomeItem';

function HomeBody({ data, loading }) {
  // const { data, loading } = Redux.useSelector(state => state.home);

  if (loading) {
    return (
      <S.Container>
        <Loading />
      </S.Container>
    );
  }

  if (!data) return null;

  return (
    <S.Container>
      <S.HomeList
        data={data.results}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <HomeItem item={item} />}
      />
    </S.Container>
  );
}

export default HomeBody;
