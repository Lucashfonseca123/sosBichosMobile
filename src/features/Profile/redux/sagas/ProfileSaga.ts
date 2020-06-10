import {call, put, takeLeading} from 'redux-saga/effects';
import {ProfileActions} from '../types/ProfileActionsTypes';
import {
  getCepErrored,
  getCepSuccess,
  IGetCepAction,
} from '../action/ProfileActions';

import {GET_CEP} from 'api/Location';

export function* watchCepRequest() {
  // yield takeLeading(ProfileActions.GET_CEP, workerGetCepRequest);
}

function* workerGetCepRequest(action: IGetCepAction) {
  try {
    const {payload} = action;
    const response = yield call(GET_CEP, {
      cep: payload.cep,
    });
    if (response) {
      yield put(getCepSuccess({address: response}));
    } else {
      console.log('Deu ruim');
      yield put(getCepErrored());
    }
  } catch (err) {
    console.log('error', err);
  }
}
