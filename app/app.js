import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

import Button from './components/Button';
import AnimatableIcon from './components/AnimatableIcon';

// Import CSS
import './css/master.scss';

const store = Store.get();

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ width: '30%', margin: '50px auto 0' }}>
          <h1>Example Button</h1>
          <Button />
          <p>uiksjdfalsdfi9oi3jnun fdhjb djhbd uhb djhb dskjhb</p>
          <AnimatableIcon />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
