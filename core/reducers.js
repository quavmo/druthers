import { sort, prop } from 'ramda';

const random = (a, b) => Math.random() < 0.5 ? -1 : 1;

const defaultDocket = {
  members: [{name: 'foo'}], title: 'whatever'
}

export const currentDocket = (state=defaultDocket, {type, payload}) => {
  // console.log("## currentDocket", type, payload)
  switch (type) {
    case 'DOCKET_FETCH_SUCCEEDED':
      return { ...payload.val(), finalizing: false }
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
  // console.log("• currentBallot", type, payload)
  switch (type) {
    case 'DOCKET_FETCH_SUCCEEDED':
      const names = payload.val().members.map(prop('name'))
      return { ...state, order: sort(random, names) }
    case 'MOVE_CARD':
      const { order } = state;
      const { dragIndex, hoverIndex } = payload;
      const dragCard = order[dragIndex];
      order.splice(dragIndex, 1)
      order.splice(hoverIndex, 0, dragCard);
      return { ...state, order: [...order] }
    default:
      return state;
  }
}