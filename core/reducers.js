const defaultDocket = {
  members: [], title: 'whatever'
}

export const currentDocket = (state=defaultDocket, {type, payload}) => {
  console.log(type, payload)
  switch (type) {
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