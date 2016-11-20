import { sort, prop, remove, insert } from 'ramda';

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
    case 'FETCH_DOCKET':
      return { ...state, id: payload };
    case 'DOCKET_FETCH_SUCCEEDED':
      return { ...state, ...payload.val(), finalizing: false }
    case 'DOCKET_CREATION_SUCCEEDED':
      return { ...state, id: payload.key };
    case 'UPDATE_TITLE':
      return { ...state, title: payload};
    case 'ADD_MEMBER':
      return { ...state, members: [...state.members, payload] };
    case 'FINALIZE_DOCKET':
      return { ...state, finalizing: true }
    default:
      return state;
  }
};

const defaultBallot = {
  order: []
};

export const currentBallot = (state=defaultBallot, {type, payload}) => {
  console.log("• currentBallot", type, payload)
  switch (type) {
    case 'DOCKET_FETCH_SUCCEEDED':
      const names = payload.val().members.map(prop('name'))
      console.log(state, "yahoo")
      return { ...state, order: sort(random, names) }
    case 'MOVE_CARD':
      return {
        ...state,
        order: swap(payload.dragIndex, payload.hoverIndex, state.order)
      }
    default:
      return state;
  }
}