import axios from 'axios'

export default function () {
  return function (dispatch) {
    dispatch({
      type: 'PERSON_LOADING'
    })
    axios.get('https://api.opendota.com/api/heroes')
      .then(({data}) => {
        dispatch({
          type: 'PERSON_LOADING_SUCCESS',
          payload: data[0]
        })
      })
      .catch(err => {
        dispatch({
          type: 'PERSON_LOADING_ERROR'
        })
        // console.log(err)
      })
  }
}