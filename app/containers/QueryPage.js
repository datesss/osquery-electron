import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QueryPage from '../components/QueryPage';
import * as QueryPageActions from '../actions/osquery';

function mapStateToProps(state) {
  return {
    response: state.osquery
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(QueryPageActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryPage);
