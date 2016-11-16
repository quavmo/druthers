import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'


const push = docket => docketBase.push(docket);
  
function* createDocket({type, payload}) {
  console.log(type, push)
   try {
      const docketRef = yield call(push, payload);
      yield put({type: "DOCKET_CREATION_SUCCEEDED", payload: docketRef});
   } catch (e) {
      yield put({type: "DOCKET_CREATION_FAILED", message: e.message});
   }
}

export function* fireSaga() {
  yield* takeLatest("FINALIZE_DOCKET", createDocket);
}
