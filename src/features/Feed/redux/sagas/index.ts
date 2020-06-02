import {fork} from 'redux-saga/effects';
import {watchFeedRequest} from './FeedSaga';

export default function* authenticationSaga() {
  yield fork(watchFeedRequest);
}
