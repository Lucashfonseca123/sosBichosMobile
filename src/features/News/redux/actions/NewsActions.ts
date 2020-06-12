import {NewsActions, INewsActions} from '../types/NewsActionsTypes';
import {
  IGetNewsFavoriteSuccess,
  IGetNewsFavoriteErrored,
} from '../types/NewsPayloadTypes';

export interface INewsBaseActions {
  type: INewsActions;
  payload?: IGetNewsFavoriteSuccess | IGetNewsFavoriteErrored;
}

export interface IGetNewsInfoAction extends INewsBaseActions {
  type: INewsActions;
}

export interface IGetNewsInfoSuccessActions extends INewsBaseActions {
  type: INewsActions;
  payload: IGetNewsFavoriteSuccess;
}

export interface IGetNewsInfoErroredActions extends INewsBaseActions {
  type: INewsActions;
  payload: IGetNewsFavoriteErrored;
}

export function getInfoNews(): IGetNewsInfoAction {
  return {
    type: NewsActions.GET_INFO,
  };
}

export function getInfoNewsSuccess(
  payload: IGetNewsFavoriteSuccess,
): IGetNewsInfoSuccessActions {
  return {
    type: NewsActions.GET_INFO_SUCCESS,
    payload,
  };
}

export function getInfoNewsErrored(
  payload: IGetNewsFavoriteErrored,
): IGetNewsInfoErroredActions {
  return {
    type: NewsActions.GET_INFO_ERRORED,
    payload,
  };
}
