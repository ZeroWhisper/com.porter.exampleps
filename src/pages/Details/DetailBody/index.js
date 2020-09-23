import React from 'react';
import * as Redux from 'react-redux';

import Loading from '~/components/Loading';
import { Creators as DetailCreators } from '~/store/ducks/detail';
import { getUri } from '~/util';

import * as S from './style';

function DetailBody() {
  const dispatch = Redux.useDispatch();

  const { data, loading } = Redux.useSelector(state => state.detail);

  React.useEffect(() => {
    dispatch(DetailCreators.detailRequest());
  }, []);

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
      <S.PosterImage
        resizeMode={'contain'}
        source={getUri(data.poster_path)}
        // source={getUri(data.backdrop_path)}
      />
      <S.Row>
        <S.Desc desc>Title</S.Desc>
        <S.Desc>{data.title}</S.Desc>
      </S.Row>
      <S.Row>
        <S.Desc desc>Original Title</S.Desc>
        <S.Desc>{data.original_title}</S.Desc>
      </S.Row>
      <S.Row lager>
        <S.Desc desc>Overview</S.Desc>
        <S.Desc>{data.overview}</S.Desc>
      </S.Row>
      <S.Row>
        <S.Desc desc>Popularity</S.Desc>
        <S.Desc>{data.popularity}</S.Desc>
      </S.Row>
      <S.Row>
        <S.Desc desc>Release Date</S.Desc>
        <S.Desc>{data.release_date}</S.Desc>
      </S.Row>
      <S.Row>
        <S.Desc desc>Vote Average</S.Desc>
        <S.Desc>{data.vote_average}</S.Desc>
      </S.Row>
    </S.Container>
  );
}

export default DetailBody;
