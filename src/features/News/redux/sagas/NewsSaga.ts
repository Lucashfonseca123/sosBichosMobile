import {takeLeading, put, call} from 'redux-saga/effects';
import {NewsActions} from '../types/NewsActionsTypes';
import {getInfoNewsSuccess, getInfoNewsErrored} from '../actions/NewsActions';

import {GET_LIST_FAVORITES} from 'api/Favorites';

export function* favoriteWatcher() {
  yield takeLeading(NewsActions.GET_INFO, workerGetInfoNews);
}

function* workerGetInfoNews() {
  try {
    const response = yield call(GET_LIST_FAVORITES);
    if (response) {
      yield put(
        getInfoNewsSuccess({
          news: response,
        }),
      );
    } else {
      yield put(
        getInfoNewsErrored({
          message: 'Deu ruim',
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
}
