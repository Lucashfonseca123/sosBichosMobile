import {fork} from 'redux-saga/effects';
import {newsWatcher} from './NewsSaga';

export default function* favoriteSaga() {
  yield fork(newsWatcher);
}
