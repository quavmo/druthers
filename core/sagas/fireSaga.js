import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { docketBase } from '../services/DataService';
import act from '../actionTypes.js';

const pushDocket = docket => docketBase.push(docket);
const pushBallotToDocketID = docketID => ballot =>
  docketBase.child(docketID).child('ballots').push(ballot);

function* createDocket({ payload }) {
  const push = pushDocket;
  try {
    yield put({
      type: act.DOCKET_CREATION_SUCCEEDED,
      payload: yield call(push, payload),
    });
  } catch (error) {
    yield put({
      type: act.DOCKET_CREATION_FAILED,
      payload: { error, docket: payload },
    });
  }
}

function* createBallot({ payload }) {
  const push = pushBallotToDocketID(payload.docketID);
  try {
    yield put({
      type: act.BALLOT_CREATION_SUCCEEDED,
      payload: yield call(push, payload),
    });
  } catch (error) {
    yield put({
      type: act.BALLOT_CREATION_FAILED,
      payload: { error, ballot: payload },
    });
  }
}


const getDocket = key => docketBase.child(key).once('value');

function* fetchDocket({ payload }) {
  try {
    yield put({
      type: act.DOCKET_FETCH_SUCCEEDED,
      payload: yield call(getDocket, payload),
    });
  } catch (error) {
    yield put({
      type: act.DOCKET_FETCH_FAILED,
      payload: { error, docket: payload },
    });
  }
}

const getBallot = (docketKey, ballotKey) => {
  // docketBase.child(docketKey).child('ballots').child(ballotKey).once('value').then(
  //   payload => console.log("hey", payload.val())
  // )
  return docketBase.child(docketKey).child('ballots').child(ballotKey).once('value');
}

function* fetchBallot({ payload }) {
  const { docketID, ballotID } = payload;
  try {
    yield put({
      type: act.BALLOT_FETCH_SUCCEEDED,
      payload: yield call(getBallot, docketID, ballotID),
    });
  } catch (error) {
    yield put({
      type: act.BALLOT_FETCH_FAILED,
      payload: { error, docket: payload },
    });
  }
}

export default function* fireSaga() {
  yield takeLatest(act.FETCH_DOCKET, fetchDocket);
  yield takeLatest(act.FINALIZE_DOCKET, createDocket);
  yield takeLatest(act.CREATE_BALLOT, createBallot);
  yield takeLatest(act.FETCH_BALLOT, fetchBallot);
}
