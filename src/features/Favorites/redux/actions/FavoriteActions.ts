import {IFavoriteActions, FavoriteActions} from '../types/FavoriteActionsTypes';
import {
  IGetInfoFavoriteSuccess,
  IGetInfoFavoriteErrored,
  ISetRemovePet,
  ISetRemovePetSuccess,
  ISetRemovePetErrored,
} from '../types/FavoritePayloadTypes';

export interface IFavoriteBaseActions {
  type: IFavoriteActions;
  payload?:
    | IGetInfoFavoriteSuccess
    | IGetInfoFavoriteErrored
    | ISetRemovePet
    | ISetRemovePetSuccess
    | ISetRemovePetErrored;
}

export interface IGetInfoFavorite extends IFavoriteBaseActions {
  type: IFavoriteActions;
}

export interface IGetFavoriteInfoSuccess extends IFavoriteBaseActions {
  type: IFavoriteActions;
  payload: IGetInfoFavoriteSuccess;
}

export interface IGetFavoriteInfoErrored extends IFavoriteBaseActions {
  type: IFavoriteActions;
  payload: IGetInfoFavoriteErrored;
}

export interface ISetRemoveSuccess extends IFavoriteBaseActions {
  type: IFavoriteActions;
  payload: IGetInfoFavoriteErrored;
}

export interface ISetRemoveFavoritePet extends IFavoriteBaseActions {
  type: IFavoriteActions;
  payload: ISetRemovePet;
}

export interface ISetRemoveFavoritePetSuccess extends IFavoriteBaseActions {
  type: IFavoriteActions;
  payload: ISetRemovePetSuccess;
}

export interface ISetRemoveFavoritePetErrored extends IFavoriteBaseActions {
  type: IFavoriteActions;
  payload: ISetRemovePetErrored;
}

export interface ISetRemoveToInitialStatus extends IFavoriteBaseActions {
  type: IFavoriteActions;
}

export function getInfoFavorites(): IGetInfoFavorite {
  return {
    type: FavoriteActions.GET_INFO,
  };
}

export function getInfoFavoritesSuccess(
  payload: IGetInfoFavoriteSuccess,
): IGetFavoriteInfoSuccess {
  return {
    type: FavoriteActions.GET_INFO_SUCCESS,
    payload,
  };
}

export function getInfoFavoritesErrored(
  payload: IGetInfoFavoriteErrored,
): IGetFavoriteInfoErrored {
  return {
    type: FavoriteActions.GET_INFO_ERRORED,
    payload,
  };
}

export function setRemovePet(payload: ISetRemovePet): ISetRemoveFavoritePet {
  return {
    type: FavoriteActions.SET_REMOVE,
    payload,
  };
}

export function setRemovePetSuccess(
  payload: ISetRemovePetSuccess,
): ISetRemoveFavoritePetSuccess {
  return {
    type: FavoriteActions.SET_REMOVE_SUCCESS,
    payload,
  };
}

export function setRemovePetErrored(
  payload: ISetRemovePetErrored,
): ISetRemoveFavoritePetErrored {
  return {
    type: FavoriteActions.SET_REMOVE_ERRORED,
    payload,
  };
}

export function setRemovePetToInitialStatus(): ISetRemoveToInitialStatus {
  return {
    type: FavoriteActions.SET_REMOVE_TO_INITIAL_STATUS,
  };
}
