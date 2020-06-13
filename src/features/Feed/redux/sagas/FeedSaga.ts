import {call, put, takeLeading} from 'redux-saga/effects';
import {FeedActions} from '../types/FeedActionsTypes';
import {
  getInfoFeedSuccess,
  getInfoFeedErrored,
  IGetInfoFeed,
  ISetFavoriteFeed,
  setFavoriteSuccess,
  setFavoriteErrored,
} from '../action/FeedActions';

import {GET_INFO, SET_FAVORITE} from 'api/Feed';

export function* watchFeedRequest() {
  yield takeLeading(FeedActions.GET_INFO, workerFeedInfoRequest);
  yield takeLeading(FeedActions.SET_FAVORITE, workerSetFavoriteRequest);
}

function* workerFeedInfoRequest(action: IGetInfoFeed) {
  try {
    const {payload} = action;
    const {pets, pagination} = yield call(GET_INFO, {
      page: payload.current_page,
    });
    if (pets.length !== 0) {
      yield put(
        getInfoFeedSuccess({
          pagination: pagination,
          pet: pets,
          current_page: payload.current_page,
        }),
      );
    } else {
      console.log('Lista vazia');
      yield put(getInfoFeedErrored({reset: true}));
    }
  } catch (err) {
    console.log('error', err);
  }
}

function* workerSetFavoriteRequest(action: ISetFavoriteFeed) {
  try {
    const {payload} = action;
    const response = yield call(SET_FAVORITE, {
      id: payload.id,
    });
    if (response.name) {
      yield put(setFavoriteSuccess({message: 'Sucesso'}));
    } else {
      yield put(setFavoriteErrored({message: 'Erro'}));
    }
  } catch (err) {
    console.log('error', err);
  }
}
