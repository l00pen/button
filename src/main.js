import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

import { Button } from './components/index.js';

import './css/master.css';

const store = Store.get();

class App extends React.Component {
  constructor() {
    super();

    // Can be lifted to a redux state if needed
    this.state = {
      buttonCSS: {
        loading: false,
        success: false,
      },
    };

    this.clickCSSHandler = this.clickCSSHandler.bind(this);
    // this.clickJSHandler = this.clickJSHandler.bind(this);
  }

  clickCSSHandler() {
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
          loading: !this.state.buttonCSS,
          success: true,
        },
      });
    }, 2000);
  }

  // clickJSHandler() {
  //   console.log('JS');
  // }

  render() {
    return (
      <Provider store={store}>
        <div style={{ width: '30%', margin: '50px auto 0' }}>
          <Button onClick={() => { console.log('click simple button') }}>
            <span>{'Click me!'}</span>
          </Button>
          <p>Animation with css</p>
          <p>Animation with javaScript</p>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
