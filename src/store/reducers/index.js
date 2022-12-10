import { combineReducers } from 'redux';

import { countIndicatorReducer } from './basketReducer';

export const reducers = combineReducers({
    count: countIndicatorReducer
});
