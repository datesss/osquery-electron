// @flow
import osquery from 'osquery';
const os = osquery.createClient({ path: '/Users/j/.osquery/shell.em' });

import type { osqueryStateType } from '../reducers/osquery';

export const QUERY_RES = 'QUERY_RES';

export function queryResponse(res) {
  return {
    type: QUERY_RES,
    res
  };
}

export function queryOsquery(query) {
  return (dispatch: () => void) => {
      os.query(query || 'SELECT uid, name FROM listening_ports l, processes p WHERE l.pid=p.pid', function(err, res) {
        dispatch(queryResponse(res.response));
      });
  };
}
