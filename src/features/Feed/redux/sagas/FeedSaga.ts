import {call, put, takeLeading} from 'redux-saga/effects';
import {FeedActions} from '../types/FeedActionsTypes';
import {
  getInfoFeedSuccess,
  getInfoFeedErrored,
  IGetInfoFeed,
} from '../action/FeedActions';

import {GET_INFO} from 'api/Feed';

export function* watchFeedRequest() {
  yield takeLeading(FeedActions.GET_INFO, workerFeedInfoRequest);
}

function* workerFeedInfoRequest(action: IGetInfoFeed) {
  try {
    const {payload} = action;
    const {pets} = yield call(GET_INFO, {
      page: payload.current_page,
    });
    console.log(pets.length);
    if (pets) {
      yield put(
        getInfoFeedSuccess({pet: pets, current_page: payload.current_page}),
      );
    } else {
      console.log('Lista vazia');
      yield put(getInfoFeedErrored({reset: true}));
    }
  } catch (err) {
    console.log('error', err);
  }
}
