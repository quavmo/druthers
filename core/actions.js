export const updateTitle = payload => ({
  type: 'UPDATE_TITLE',
  payload
});

export const addMember = payload => ({
  type: 'ADD_MEMBER',
  payload
});

export const finalizeDocket = payload => ({
  type: 'FINALIZE_DOCKET',
  payload
});

export const fetchDocket = payload => ({
  type: 'FETCH_DOCKET',
  payload
})

export const moveCard = (dragIndex, hoverIndex) => ({
  type: 'MOVE_CARD',
  payload: { dragIndex, hoverIndex }
})

