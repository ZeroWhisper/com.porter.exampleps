import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import NetInfo from '@react-native-community/netinfo';

import { Creators as InfoCreators } from '~/store/ducks/info';

export function* startWatchingNetworkConnectivity() {
  const channel = eventChannel(emmiter => {
    NetInfo.addEventListener(state => emmiter(state.isConnected));
    return () => NetInfo.removeEventListener();
  });

  try {
    while (true) {
      const isConnected = yield take(channel);

      yield put(InfoCreators.networkOnline(isConnected));
    }
  } catch (e) {
    console.tron.log('ERROR', e);
  } finally {
    channel.close();
  }
}
