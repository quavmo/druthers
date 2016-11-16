import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { docketBase } from './services/DataService';

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

export function* fireSaga() {
  yield* takeLatest("FINALIZE_DOCKET", createDocket);
}
