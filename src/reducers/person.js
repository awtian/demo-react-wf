const defaultState = {
  person: {},
  loading: false,
  error: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'PERSON_LOADING':
      return {...state, loading: true}
    case 'PERSON_LOADING_SUCCESS':
      return {...state, person: action.payload, loading: false}
    case 'PERSON_LOADING_FAILED':
      return {...state, loading: false, error: true}
    default:
      return state
  }
}