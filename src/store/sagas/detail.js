import { put, call, select, delay } from 'redux-saga/effects';

import { Creators as DetailCreators } from '~/store/ducks/detail';
import api, { api_key } from '~/services/api';

export function* request({ payload }) {
  try {
    const params = new URLSearchParams({
      api_key,
    });

    const movie_id = yield select(state => state.detail.selected.id);

    const url = `/movie/${movie_id}?${params.toString()}`;

    const response = yield call(api.get, url);

    const { data, status } = response;

    if (status != 200) {
      throw new Error('Algo inesperado aconteceu');
    }

    yield put(DetailCreators.detailSuccess(data));
  } catch (e) {
    yield put(DetailCreators.detailFailure(e.message));
  }
}
