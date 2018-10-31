const defaultState = { name:  'wonderfox', lastUpdated: 'not yet' }

function name (state = defaultState, action) {
  // return state
  switch (action.type) {
    case 'UPDATENAME': {
      return {
        ...state,
        name: action.payload,
        lastUpdated: action.updatedAt
      }
    }
    default:
      return state
  }
}

export default name;