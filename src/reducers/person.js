const defaultState = { 
  person: {name: '', height: '', mass: ''}, 
  loading: false
}

function person (state = defaultState, action) {
  switch (action.type) {
    case 'LOADING_PERSON':
      return {...state, loading: true}
    case 'LOADING_PERSON_SUCCESS':
      return {...state, person: action.payload, loading: false}
    default:
      return state
  }
}

export default person