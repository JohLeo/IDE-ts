import { legacy_createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';
import { persistMiddleware } from './middleware/persist-middleware';


export const store = legacy_createStore(reducers, {}, applyMiddleware(persistMiddleware, thunk));


