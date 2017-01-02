import React from 'react';
import './Button.scss';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      loading: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.state.loading) {
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 3000);
    }
  }

  render() {
    const { loading } = this.state;
    const label = loading ? 'loading' : 'Click me';
    return (
      <button
        className="button"
        onClick={this.onClick}
      >
        {label}
      </button>
    );
  }
}

export default Button;
