import { put, call, select, delay } from 'redux-saga/effects';
// import { ToastActionsCreators as ToastCreators } from 'react-native-redux-toast';

import { Creators as TokenCreators } from '~/store/ducks/token';
import { authentication } from '~/services/api';
// import * as api from '~/services/api';

export function* request() {
  try {
    const response = yield call(authentication.get);

    console.tron.log('response', response);

    const { data, status } = response;

    if (status != 200) {
      throw new Error('Algo inesperado aconteceu');
    }

    yield put(TokenCreators.tokenSuccess(data));
  } catch (e) {
    yield put(TokenCreators.tokenFailure());
  }
}
