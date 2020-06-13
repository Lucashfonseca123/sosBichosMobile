import {takeLeading, put, call} from 'redux-saga/effects';
import {NewsActions} from '../types/NewsActionsTypes';
import {getInfoNewsSuccess, getInfoNewsErrored} from '../actions/NewsActions';

import {GET_NEWS} from 'api/News';

export function* newsWatcher() {
  yield takeLeading(NewsActions.GET_INFO, workerGetInfoNews);
}

function* workerGetInfoNews() {
  try {
    const response = yield call(GET_NEWS);
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
