import { createStore, applyMiddleware, compose } from 'redux'

// Redux Thunk is middleware that allows you to return functions, not just actions. Allows for delayed actions including working with promises i.e. our fetch request
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middleware = applyMiddleware(thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(middleware))
