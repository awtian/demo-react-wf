const logger = (store) => next => action => {

  if(action.payload != 'ismail'){
    return next({type:''})
  }

  return next(action)
}

// const logger = function(store) {
//   return function(next) {
//     return function(action) {
//       console.group(action.type)
//       console.info('dispatching', action)
//       let result = next(action)
//       return result
//     }
//   }
// }

export default logger