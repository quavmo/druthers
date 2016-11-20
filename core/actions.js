import { default as act } from './actionTypes.js';

export const updateTitle = payload => ({
  type: act.UPDATE_TITLE,
  payload
});

export const addMember = payload => ({
  type: act.ADD_MEMBER,
  payload
});

export const finalizeDocket = payload => ({
  type: act.FINALIZE_DOCKET,
  payload
});

export const fetchDocket = payload => ({
  type: act.FETCH_DOCKET,
  payload
})

export const moveCard = (dragIndex, hoverIndex) => ({
  type: act.MOVE_CARD,
  payload: { dragIndex, hoverIndex }
})

export const createBallot = payload => ({
  type: act.CREATE_BALLOT,
  payload
});

