import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from '../reducers';
import getGroup from '../action/index.js'

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(getGroup())

export default store
