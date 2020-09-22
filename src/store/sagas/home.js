import { put, call, select, delay } from 'redux-saga/effects';

import { Creators as HomeCreators } from '~/store/ducks/home';
import api, { api_key } from '~/services/api';

export function* request({ payload }) {
  try {
    const params = new URLSearchParams({
      api_key,
    });

    const url = `/movie/upcoming?${params.toString()}`;

    const response = yield call(api.get, url);

    const { data, status } = response;

    if (status != 200) {
      throw new Error('Algo inesperado aconteceu');
    }

    yield put(HomeCreators.homeSuccess(data));
  } catch (e) {
    yield put(HomeCreators.homeFailure(e.message));
  }
}
