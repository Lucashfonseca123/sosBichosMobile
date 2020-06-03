import {IFeedTypes, FeedActions} from '../types/FeedActionsTypes';
import {
  IGetFeed,
  IGetFeedSuccess,
  IGetFeedErrored,
  ISetCurrentPage,
  ISetCurrentErrored,
  ISetFavorite,
  ISetFavoriteSuccessOrErrored,
} from '../types/FeedPayloadTypes';

export interface IFeedBaseAction {
  type: IFeedTypes;
  payload?:
    | IGetFeed
    | IGetFeedSuccess
    | IGetFeedErrored
    | ISetCurrentPage
    | ISetCurrentErrored
    | ISetFavorite
    | ISetFavoriteSuccessOrErrored;
}

export interface IGetInfoFeed extends IFeedBaseAction {
  type: IFeedTypes;
  payload: IGetFeed;
}

export interface IGetInfoFeedSuccess extends IFeedBaseAction {
  type: IFeedTypes;
  payload: IGetFeedSuccess;
}

export interface IGetInfoFeedErrored extends IFeedBaseAction {
  type: IFeedTypes;
  payload: IGetFeedErrored;
}

export interface ISetCurrentFeedPage extends IFeedBaseAction {
  type: IFeedTypes;
  payload: ISetCurrentPage;
}

export interface ISetCurrentFeedPageErrored extends IFeedBaseAction {
  type: IFeedTypes;
  payload: ISetCurrentErrored;
}

export interface ISetReset extends IFeedBaseAction {
  type: IFeedTypes;
}
export interface ISetFavoriteFeed extends IFeedBaseAction {
  type: IFeedTypes;
  payload: ISetFavorite;
}
export interface ISetFavoriteSuccessOrErroredFeed extends IFeedBaseAction {
  type: IFeedTypes;
  payload: ISetFavoriteSuccessOrErrored;
}
export interface ISetFavoriteMessageInitial extends IFeedBaseAction {
  type: IFeedTypes;
}

export function getInfoFeed(payload: IGetFeed): IGetInfoFeed {
  return {
    type: FeedActions.GET_INFO,
    payload,
  };
}

export function getInfoFeedSuccess(
  payload: IGetFeedSuccess,
): IGetInfoFeedSuccess {
  return {
    type: FeedActions.GET_INFO_SUCCESS,
    payload,
  };
}

export function getInfoFeedErrored(
  payload: IGetFeedErrored,
): IGetInfoFeedErrored {
  return {
    type: FeedActions.GET_INFO_ERRORED,
    payload,
  };
}

export function setCurrentPage(payload: ISetCurrentPage): ISetCurrentFeedPage {
  return {
    type: FeedActions.SET_CURRENT_PAGE,
    payload,
  };
}

export function setCurrentPageSuccess(
  payload: ISetCurrentPage,
): ISetCurrentFeedPage {
  return {
    type: FeedActions.SET_CURRENT_PAGE_SUCCESS,
    payload,
  };
}

export function setCurrentPageErrored(
  payload: ISetCurrentErrored,
): ISetCurrentFeedPageErrored {
  return {
    type: FeedActions.SET_CURRENT_PAGE,
    payload,
  };
}

export function setReset(): ISetReset {
  return {
    type: FeedActions.SET_RESET,
  };
}
export function setFavorite(payload: ISetFavorite): ISetFavoriteFeed {
  return {
    type: FeedActions.SET_FAVORITE,
    payload,
  };
}
export function setFavoriteSuccess(
  payload: ISetFavoriteSuccessOrErrored,
): ISetFavoriteSuccessOrErroredFeed {
  return {
    type: FeedActions.SET_FAVORITE_SUCCESS,
    payload,
  };
}
export function setFavoriteErrored(
  payload: ISetFavoriteSuccessOrErrored,
): ISetFavoriteSuccessOrErroredFeed {
  return {
    type: FeedActions.SET_FAVORITE_ERRORED,
    payload,
  };
}
export function setFavoriteMessageToInitial(): ISetFavoriteMessageInitial {
  return {
    type: FeedActions.SET_FAVORITE_MESSAGE_TO_INITIAL,
  };
}
