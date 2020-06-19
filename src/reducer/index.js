import { combineReducers, createStore } from 'redux';

import localeReducer from './locale';

const rootReducer = (state, action) =>
    combineReducers({
        locale: localeReducer,
    })(state, action);
const initialState = rootReducer(undefined, { type: '' });

const store = createStore(rootReducer, initialState);

export default store;
