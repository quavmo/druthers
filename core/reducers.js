const defaultDocket = {
  members: [], final: false, title: 'whatever', id: 123
}


export const currentDocket = (state=defaultDocket, {type, payload}) => {
  switch (type) {
    case 'UPDATE_TITLE':
      return { ...state, title: payload};
    case 'ADD_MEMBER':
        return { ...state, members: [...state.members, payload], };
    default:
      return state;
  }
};