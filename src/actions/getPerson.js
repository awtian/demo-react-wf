import axios from 'axios'

export default function () {
  return function (dispatch) {
    dispatch({type: 'LOADING_PERSON'})
    axios.get('https://swapi.co/api/people/1')
      .then(({data}) => {
        dispatch({
          type: 'LOADING_PERSON_SUCCESS',
          payload: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}