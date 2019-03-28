import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

const App = ({ counter, inc, dec }) => {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

// const mapDispatchToProps = dispatch => {
//   const { inc, dec } = bindActionCreators(actions, dispatch);

//   return {
//     inc,
//     dec
//   };
// };

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  actions
)(App);
