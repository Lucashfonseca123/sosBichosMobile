import {takeLeading, put, call} from 'redux-saga/effects';
import {FavoriteActions} from '../types/FavoriteActionsTypes';
import {
  getInfoFavoritesErrored,
  getInfoFavoritesSuccess,
  setRemovePetSuccess,
  setRemovePetErrored,
  ISetRemoveFavoritePet,
  setAdoptSuccess,
  setAdoptErrored,
  ISetAdoptAction,
} from '../actions/FavoriteActions';

import {
  GET_LIST_FAVORITES,
  SET_REMOVE_ITEM_FAVORITE,
  SET_ADOPT,
} from 'api/Favorites';

export function* favoriteWatcher() {
  yield takeLeading(FavoriteActions.GET_INFO, workerGetInfoFavorites);
  yield takeLeading(FavoriteActions.SET_REMOVE, workerRequestRemoveFavorite);
  yield takeLeading(FavoriteActions.SET_ADOPT, workerRequestAdopt);
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

function* workerRequestAdopt(action: ISetAdoptAction) {
  try {
    const {payload} = action;
    const response = yield call(SET_ADOPT, {
      pet_id: payload.pet_id,
      user_id: payload.user_id,
    });
    console.log(response);
    if (response.user_id !== '') {
      yield put(
        setAdoptSuccess({
          message: 'Deu boa',
        }),
      );
    } else {
      yield put(
        setAdoptErrored({
          message: 'Deu ruim',
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
}
