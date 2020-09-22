import { all, takeLatest, spawn } from 'redux-saga/effects';

import { Types as HomeTypes } from '../ducks/home';
import * as HomeSaga from './home';

import { Types as TokenTypes } from '../ducks/token';
import * as TokenSaga from './token';

import { Types as DetailTypes } from '../ducks/detail';
import * as DetailSaga from './detail';

export default function* rootSaga() {
  const list = [];

  list.push(takeLatest(HomeTypes.REQUEST, HomeSaga.request));
  list.push(takeLatest(TokenTypes.REQUEST, TokenSaga.request));
  list.push(takeLatest(DetailTypes.REQUEST, DetailSaga.request));

  yield all(list);
}
