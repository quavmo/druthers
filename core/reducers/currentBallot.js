import act from '../actionTypes';
import { sort, prop, isEmpty } from 'ramda';
import { coinToss, swap } from '../services/helpers';

const defaultBallot = {
  order: [],
};

const scrambledNames = payload => {
  const { members } = payload.val();
  const names = members.map(prop('name'));
  sort(coinToss, names)
}

const currentBallot = (state = defaultBallot, { type, payload }) => {
  switch (type) {
    case act.CREATE_BALLOT:
      return { ...state, submitting: true };
    case act.BALLOT_FETCH_SUCCEEDED:
      return { ...payload.val() };
    case act.BALLOT_FETCH_FAILED:
      return { ...state };
    case act.BALLOT_CREATION_SUCCEEDED:
      return {
        ...state,
        id: payload.key,
        submitting: false,
      };
    case act.DOCKET_FETCH_SUCCEEDED:
      return {
        ...state,
        order: isEmpty(state.order) ? scrambledNames(payload) : state.order,
      };
    case act.MOVE_CANDIDATE:
      return {
        ...state,
        order: swap(payload.dragIndex, payload.hoverIndex, state.order),
      };
    default:
      return state;
  }
};

export default currentBallot;
