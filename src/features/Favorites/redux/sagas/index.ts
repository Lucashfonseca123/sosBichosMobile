import {fork} from 'redux-saga/effects';
import {favoriteWatcher} from './FavoriteSaga';

export default function* favoriteSaga() {
  yield fork(favoriteWatcher);
}
