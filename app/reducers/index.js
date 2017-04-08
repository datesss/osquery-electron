// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import osquery from './osquery';


const rootReducer = combineReducers({
    osquery,
    counter,
  routing
});

export default rootReducer;
