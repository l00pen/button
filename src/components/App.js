import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

import {
  Button,
  ButtonAsyncCSS,
  ButtonAsyncJS,
} from './index';

import '../css/master.css';

class App extends React.Component {
  clickHandler = () => {
    const tmpLabel = this.state.button.label;
    this.setState({
      button: {
        label: 'loading...',
      },
    });

    setTimeout(() => {
      this.setState({
        button: {
          label: tmpLabel,
        },
      });
    }, 2000);
  }

  clickCSSHandler = () => {
    // faking an async success request
    this.setState({
      buttonCSS: {
        ...this.state.buttonCSS,
        loading: !this.state.buttonCSS.loading,
      },
    });

    setTimeout(() => {
      this.setState({
        buttonCSS: {
          ...this.state.buttonCSS,
          loading: !this.state.buttonCSS.loading,
          success: true,
        },
      });
      setTimeout(() => {
        this.setState({
          buttonCSS: {
            ...this.state.buttonCSS,
            success: false,
          },
        });
      }, 2000);
    }, 2000);
  }

  clickJSHandler = () => {
    // faking an async success request
    this.setState({
      buttonJS: {
        ...this.state.buttonJS,
        loading: !this.state.buttonJS.loading,
      },
    });

    setTimeout(() => {
      this.setState({
        buttonJS: {
          ...this.state.buttonJS,
          loading: !this.state.buttonJS.loading,
          success: true,
        },
      });
      setTimeout(() => {
        this.setState({
          buttonJS: {
            ...this.state.buttonJS,
            success: false,
          },
        });
      }, 2000);
    }, 2000);
  }

  render() {
    const { button, buttonCSS, buttonJS } = this.props;
    return (
      <div style={{ width: '30%', margin: '50px auto 0' }}>
        <p>Button no animation</p>
        <Button onClick={this.clickHandler}>
          <span>{button.label}</span>
        </Button>
        <p>Button with loading animation and success animation.</p>
        <ButtonAsyncCSS
          onClick={this.clickCSSHandler}
          success={buttonCSS.success}
          label={buttonCSS.label}
          loading={buttonCSS.loading}
        />
        <p>Button with loading animation tweening into success animation.</p>
        <ButtonAsyncJS
          label={'Click me!'}
          loading={buttonJS.loading}
          onClick={this.clickJSHandler}
          success={buttonJS.success}
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
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
