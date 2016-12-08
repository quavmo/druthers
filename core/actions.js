import { default as act } from './actionTypes.js';

export const updateTitle = payload => ({
  type: act.UPDATE_TITLE,
  payload,
});

export const addCandidate = payload => ({
  type: act.ADD_CANDIDATE,
  payload,
});

export const finalizeDocket = payload => ({
  type: act.FINALIZE_DOCKET,
  payload,
});

export const fetchDocket = payload => ({
  type: act.FETCH_DOCKET,
  payload,
});

export const fetchBallot = payload => ({
  type: act.FETCH_BALLOT,
  payload,
});

export const moveCandidate = (dragIndex, hoverIndex) => ({
  type: act.MOVE_CANDIDATE,
  payload: { dragIndex, hoverIndex },
});

export const createBallot = payload => ({
  type: act.CREATE_BALLOT,
  payload,
});

export const docketFetchSucceeded = payload => ({
  type: act.DOCKET_FETCH_SUCCEEDED,
  payload,
});

export const deleteCandidate = payload => ({
  type: act.DELETE_CANDIDATE,
  payload,
});

export const navigateToPage = payload => ({
  type: act.VISIT_PAGE,
  payload,
});

