import { sort, prop, remove, insert } from 'ramda';
import { default as act } from './actionTypes';

const random = (a, b) => Math.random() < 0.5 ? -1 : 1;
const swap = (srcIndex, destIndex, list) => insert(
  destIndex,
  list[srcIndex],
  remove(srcIndex, 1, list)
)

const defaultDocket = {
  members: [{name: 'foo'}], title: 'whatever'
}

export const currentDocket = (state=defaultDocket, {type, payload}) => {
  switch (type) {
    case act.FETCH_DOCKET:
      return { ...state, id: payload };
    case act.DOCKET_FETCH_SUCCEEDED:
      return { ...state, ...payload.val(), finalizing: false }
    case act.DOCKET_CREATION_SUCCEEDED:
      return { ...state, id: payload.key };
    case act.UPDATE_TITLE:
      return { ...state, title: payload};
    case act.ADD_MEMBER:
      return { ...state, members: [...state.members, payload] };
    case act.FINALIZE_DOCKET:
      return { ...state, finalizing: true }
    default:
      return state;
  }
};

const defaultBallot = {
  order: []
};

export const currentBallot = (state=defaultBallot, {type, payload}) => {
  console.log("•ß• currentBallot", type, payload)
  switch (type) {
    case act.BALLOT_CREATION_SUCCEEDED:
      return {
        ...state,
        id: payload.key
      };
    case act.DOCKET_FETCH_SUCCEEDED:
      return { 
        ...state,
        order: sort(random, payload.val().members.map(prop('name')))
      };
    case act.MOVE_CARD:
      return {
        ...state,
        order: swap(payload.dragIndex, payload.hoverIndex, state.order)
      };
    default:
      return state;
  }
}