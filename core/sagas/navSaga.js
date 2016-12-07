import { takeLatest } from 'redux-saga';
import act from '../actionTypes.js';

const path = {
  Ballot: docketID => `/dockets/${docketID}/ballots/new`,
  Results: docketID => `/dockets/${docketID}/results`,
  Docket: docketID => `/dockets/${docketID}`,
};

function* visitPage({ payload }) {
  yield window.location = path[payload.pageLabel](payload.docketID);
}

export default function* navSaga() {
  yield takeLatest(act.VISIT_PAGE, visitPage);
}
