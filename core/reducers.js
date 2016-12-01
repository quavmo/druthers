import { sort, prop, remove, insert, reject, equals } from 'ramda';
import { default as act } from './actionTypes';
import { coinToss, swap } from './services/helpers'

const defaultDocket = {
  members: [], title: ''
}

export const currentDocket = (state=defaultDocket, {type, payload}) => {
  
  switch (type) {
    case act.FETCH_DOCKET:
      return { ...state, id: payload };
    case act.DELETE_CARD:
      return { ...state, members: [...reject(equals({name: payload}), state.members)] };
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
  switch (type) {
    case act.BALLOT_CREATION_SUCCEEDED:
      return {
        ...state,
        id: payload.key
      };
    case act.DOCKET_FETCH_SUCCEEDED:
      return { 
        ...state,
        order: sort(coinToss, payload.val().members.map(prop('name')))
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