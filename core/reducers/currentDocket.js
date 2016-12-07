import act from '../actionTypes';
import { reject, equals } from 'ramda';

const defaultDocket = {
  members: [], title: '', ballots: [],
};

const currentDocket = (state = defaultDocket, { type, payload }) => {
  switch (type) {
    case act.FETCH_DOCKET:
      return { ...state, id: payload };
    case act.DELETE_CANDIDATE:
      return { ...state, members: [...reject(equals({ name: payload }), state.members)] };
    case act.DOCKET_FETCH_SUCCEEDED:
      return { ...state, id: payload.key, ...payload.val(), finalizing: false };
    case act.DOCKET_CREATION_SUCCEEDED:
      return { ...state, id: payload.key };
    case act.UPDATE_TITLE:
      return { ...state, title: payload };
    case act.ADD_CANDIDATE:
      return { ...state, members: [...state.members, payload] };
    case act.FINALIZE_DOCKET:
      return { ...state, finalizing: true };
    default:
      return state;
  }
};


export default currentDocket;
