import {IFeedTypes, FeedActions} from '../types/FeedActionsTypes';
import {
  IGetFeed,
  IGetFeedSuccess,
  IGetFeedErrored,
  ISetCurrentPage,
  ISetCurrentErrored,
} from '../types/FeedPayloadTypes';

export interface IFeedBaseAction {
  type: IFeedTypes;
  payload?:
    | IGetFeed
    | IGetFeedSuccess
    | IGetFeedErrored
    | ISetCurrentPage
    | ISetCurrentErrored;
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
