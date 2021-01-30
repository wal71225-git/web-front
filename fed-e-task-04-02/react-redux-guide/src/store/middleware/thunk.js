const thunk =  ({ dispatch }) => next => action => {
    // setTimeout(() => {
    //     next(action)
    // }, 2000)
    if (typeof action === 'function' ) {
        console.log('dispatch', dispatch)
        return action(dispatch)
    }
    next(action)
}
export default thunk