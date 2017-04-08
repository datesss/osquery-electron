// @flow
import { QUERY_RES } from '../actions/osquery';

export type osqueryStateType = {
  osquery: response
};

type actionType = {
  type: string
};

export default function osquery(state: response = [], action: actionType) {
  switch (action.type) {
    case QUERY_RES:
        state = action.res;
        return state;
    default:
      return state;
  }
}
