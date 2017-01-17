import React from 'react';
import './Button.scss';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      showLoading: false,
      showSuccess: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.state.showLoading) {
      this.setState({
        showLoading: true,
      });
      setTimeout(() => {
        this.setState({
          showLoading: false,
          showSuccess: true,
        }, () => {
          setTimeout(() => {
            this.setState({
              showSuccess: false,
            });
          }, 2000);
        });
      }, 1000);
    }
  }

  render() {
    const { showLoading, showSuccess } = this.state;
    // const showLabel = !showLoading && !showSuccess;
    const label = 'Click me';
    const buttonClass = showSuccess ? 'success' : '';
    return (
      <button
        className={`button action-button ${buttonClass}`}
        onClick={this.onClick}
      >
        <div className="object-wrapper flex">
          { showLoading &&
            <div className={'object circle'} />
          }
          { showSuccess &&
            <div className={'object checkMark'} />
          }
          { !showLoading &&
            <p className="action-button-label">{label}</p>
          }
        </div>
      </button>
    );
  }
}

export default Button;
