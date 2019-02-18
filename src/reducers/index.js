// @flow
import {combineReducers} from 'redux'

import todos from './todos';
import visibility from './visibility'


const reducers = combineReducers({
    todos,
    visibility
})

export default reducers;

