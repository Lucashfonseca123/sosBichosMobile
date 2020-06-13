import {IFavoriteActions, FavoriteActions} from '../types/FavoriteActionsTypes';
import {
  IGetInfoFavoriteSuccess,
  IGetInfoFavoriteErrored,
  ISetRemovePet,
  ISetRemovePetSuccess,
  ISetRemovePetErrored,
  ISetAdopt,
  ISetAdoptErrored,
  ISetAdoptSuccess,
} from '../types/FavoritePayloadTypes';

export interface IFavoriteBaseActions {
  type: IFavoriteActions;
  payload?:
    | IGetInfoFavoriteSuccess
    | IGetInfoFavoriteErrored
    | ISetAdopt
    | ISetAdoptSuccess
    | ISetAdoptErrored
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
export interface ISetAdoptAction extends IFavoriteBaseActions {
  type: IFavoriteActions;
  payload: ISetAdopt;
}
export interface ISetAdoptActionSuccess extends IFavoriteBaseActions {
  type: IFavoriteActions;
  payload: ISetAdoptSuccess;
}
export interface ISetAdoptActionErrored extends IFavoriteBaseActions {
  type: IFavoriteActions;
  payload: ISetAdoptErrored;
}

export interface ISetRemoveToInitialStatus extends IFavoriteBaseActions {
  type: IFavoriteActions;
}
export interface ISetStatusDispatchToInitialAction
  extends IFavoriteBaseActions {
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

export function setAdopt(payload: ISetAdopt): ISetAdoptAction {
  return {
    type: FavoriteActions.SET_ADOPT,
    payload,
  };
}
export function setAdoptSuccess(
  payload: ISetAdoptSuccess,
): ISetAdoptActionSuccess {
  return {
    type: FavoriteActions.SET_ADOPT_SUCCESS,
    payload,
  };
}
export function setAdoptErrored(
  payload: ISetAdoptErrored,
): ISetAdoptActionErrored {
  return {
    type: FavoriteActions.SET_ADOPT_ERRORED,
    payload,
  };
}

export function setRemovePetToInitialStatus(): ISetRemoveToInitialStatus {
  return {
    type: FavoriteActions.SET_REMOVE_TO_INITIAL_STATUS,
  };
}

export function setStatusDispatchToInitial(): ISetRemoveToInitialStatus {
  return {
    type: FavoriteActions.STATUS_DISPATCH_TO_INITIAL,
  };
}
