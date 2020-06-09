import {IProfileTypes, ProfileActions} from '../types/ProfileActionsTypes';
import {
  IProfileUrl,
  IProfileUrlSuccessOrErrored,
} from '../types/ProfilePayloadTypes';

export interface IProfileBaseAction {
  type: IProfileTypes;
  payload?: IProfileUrl | IProfileUrlSuccessOrErrored;
}

export interface IProfileUrlAction extends IProfileBaseAction {
  type: IProfileTypes;
  payload: IProfileUrl;
}

export interface IProfileUrlActionSuccess extends IProfileBaseAction {
  type: IProfileTypes;
  payload: IProfileUrlSuccessOrErrored;
}

export function setPhotoUrl(payload: IProfileUrl): IProfileUrlAction {
  return {
    type: ProfileActions.SET_CAMERA_URL,
    payload,
  };
}

export function setPhotoUrlSuccess(
  payload: IProfileUrlSuccessOrErrored,
): IProfileUrlActionSuccess {
  return {
    type: ProfileActions.SET_CAMERA_URL_SUCCESS,
    payload,
  };
}

export function setPhotoUrlErrored(
  payload: IProfileUrlSuccessOrErrored,
): IProfileUrlActionSuccess {
  return {
    type: ProfileActions.SET_CAMERA_URL_ERRORED,
    payload,
  };
}
