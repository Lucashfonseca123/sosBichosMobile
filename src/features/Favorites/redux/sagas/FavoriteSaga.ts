import {takeLeading, put, call} from 'redux-saga/effects';
import {FavoriteActions} from '../types/FavoriteActionsTypes';
import {
  getInfoFavoritesErrored,
  getInfoFavoritesSuccess,
  setRemovePetSuccess,
  setRemovePetErrored,
  ISetRemoveFavoritePet,
} from '../actions/FavoriteActions';

import {GET_LIST_FAVORITES, SET_REMOVE_ITEM_FAVORITE} from 'api/Favorites';

export function* favoriteWatcher() {
  yield takeLeading(FavoriteActions.GET_INFO, workerGetInfoFavorites);
  yield takeLeading(FavoriteActions.SET_REMOVE, workerRequestRemoveFavorite);
}

function* workerGetInfoFavorites() {
  try {
    const response = yield call(GET_LIST_FAVORITES);
    if (response) {
      yield put(
        getInfoFavoritesSuccess({
          pet: response,
        }),
      );
    } else {
      yield put(
        getInfoFavoritesErrored({
          message: 'Deu ruim',
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* workerRequestRemoveFavorite(action: ISetRemoveFavoritePet) {
  try {
    const {payload} = action;
    const response = yield call(SET_REMOVE_ITEM_FAVORITE, {id: payload.id});
    console.log(response);
    console.log('to aqui');
    if (response) {
      yield put(
        setRemovePetSuccess({
          statusRemove: true,
        }),
      );
    } else {
      yield put(
        setRemovePetErrored({
          statusRemove: false,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
}
