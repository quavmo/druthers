import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import { docketBase } from './services/DataService';
import { sync, VALUE } from 'firebase-saga';

const pushDocket = docket => docketBase.push(docket);
const pushBallotToDocketID = docketID => ballot =>
  docketBase.child(docketID).child('ballots').push(ballot)

function* createDocket({type, payload}) {
  const push = pushDocket;
   try {
      yield put({
        type: "DOCKET_CREATION_SUCCEEDED",
        payload: yield call(pushDocket, payload)
      });
   } catch (error) {
      yield put({
        type: "DOCKET_CREATION_FAILED",
        payload: {error, docket: payload}
      });
   }
}

function* createBallot({type, payload}) {
  const push = pushBallotToDocketID(payload.docketID);
   try {
      yield put({
        type: "BALLOT_CREATION_SUCCEEDED",
        payload: yield call(push, payload)
      });
   } catch (error) {
      yield put({
        type: "BALLOT_CREATION_FAILED",
        payload: {error, ballot: payload}
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
  yield takeLatest("CREATE_BALLOT", createBallot);
}
