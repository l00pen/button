import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Actions from '../actions';

import {
  Button,
  ButtonAsyncCSS,
  ButtonAsyncJS,
} from './index';

import '../css/master.css';

class App extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape().isRequired,
    button: PropTypes.shape().isRequired,
    buttonJS: PropTypes.shape().isRequired,
    buttonCSS: PropTypes.shape().isRequired,
  }

  render() {
    const { actions, button, buttonCSS, buttonJS } = this.props;
    return (
      <div style={{ width: '30%', margin: '50px auto 0' }}>
        <p>Button no animation</p>
        <Button onClick={actions.buttonSimpleClickHandler}>
          <span>{button.label}</span>
        </Button>
        <p>Button with loading animation and success animation.</p>
        <ButtonAsyncCSS
          onClick={actions.buttonCSSClickHandler}
          {...buttonCSS}
        />
        <p>Button with loading animation tweening into success animation.</p>
        <ButtonAsyncJS
          onClick={actions.buttonJSClickHandler}
          {...buttonJS}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ...bindActionCreators(Actions, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
