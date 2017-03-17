/**
 * 日志中间件
 */
const logger = ({dispatch, getState}) => next =>action=> {
    console.log('current state', getState())
    console.log('dispatching...', action);
    let result = next(action)
    console.log('next state', getState())
    console.log('.........')
    return result
}


/**
 * thunk中间件
 */
const thunk=({dispatch, getState})=>next=>action=>
typeof action === 'function'?action(dispatch, getState):next(action)

export {thunk,logger}