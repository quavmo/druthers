import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import { docketBase } from './services/DataService';
import { sync, VALUE } from 'firebase-saga';

const push = docket => docketBase.push(docket);


function* createDocket({type, payload}) {
   try {
      yield put({
        type: "DOCKET_CREATION_SUCCEEDED",
        payload: yield call(push, payload)
      });
   } catch (error) {
      yield put({
        type: "DOCKET_CREATION_FAILED",
        payload: {error, docket: payload}
      });
   }
}

const get = key => docketBase.child(key).once('value')

function* fetchDocket({payload}) {
  try {
     yield put({
       type: "DOCKET_FETCH_SUCCEEDED",
       payload: yield call(get, payload)
     });
  } catch (error) {
     yield put({
       type: "DOCKET_FETCH_FAILED",
       payload: {error, docket: payload}
     });
  }
}

export function* fireSaga() {
  yield takeLatest("FETCH_DOCKET", fetchDocket);
  yield takeLatest("FINALIZE_DOCKET", createDocket);
}
