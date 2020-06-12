import {fork} from 'redux-saga/effects';
import {favoriteWatcher} from './NewsSaga';

export default function* favoriteSaga() {
  yield fork(favoriteWatcher);
}
