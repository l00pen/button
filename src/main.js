import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

import {
  AsyncCSS,
  AsyncJS,
  Button,
  ButtonAsync,
} from './components';

import './css/master.css';

const store = Store.get();

class App extends React.Component {
  constructor() {
    super();

    // Can be lifted to a redux state if needed
    this.state = {
      button: {
        label: 'Click me!',
      },
      buttonCSS: {
        label: 'Click me!',
        loading: false,
        success: false,
      },
      buttonJS: {
        label: 'Click me!',
        loading: false,
        success: false,
      },
    };
  }

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
    return (
      <Provider store={store}>
        <div style={{ width: '30%', margin: '50px auto 0' }}>
          <p>Button no animation</p>
          <Button onClick={this.clickHandler}>
            <span>{this.state.button.label}</span>
          </Button>
          <p>Button with success animation with only react and css</p>
          <ButtonAsync
            onClick={this.clickCSSHandler}
            success={this.state.buttonCSS.success}
          >
            <AsyncCSS
              label={this.state.buttonCSS.label}
              loading={this.state.buttonCSS.loading}
            />
          </ButtonAsync>
          <p>Button with success animation with animation event</p>
          <ButtonAsync
            onClick={this.clickJSHandler}
            success={this.state.buttonJS.success}
          >
            <AsyncJS
              label={'Click me!'}
              loading={this.state.buttonJS.loading}
            />
          </ButtonAsync>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
