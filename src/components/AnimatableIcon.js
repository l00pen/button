import React from 'react';
// import './AnimatableIcon.scss';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      showLoading: false,
      showSuccess: false,
      spinnClass: '',
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate() {
    if (this.circle) {
      this.circle.addEventListener('animationiteration', () => {
        if (!this.state.showLoading) {
          this.setState({
            showSuccess: true,
            spinnClass: 'animationEnd',
          }, () => {
            setTimeout(() => {
              this.setState({
                showSuccess: false,
                spinnClass: '',
              });
            }, 2000);
          });
        }
      });
    }
  }

  onClick() {
    if (!this.state.showLoading) {
      this.setState({
        showLoading: true,
        spinnClass: 'animation',
      });
      setTimeout(() => {
        this.setState({
          showLoading: false,
        });
      }, 2000);
    }
  }

  render() {
    const { showSuccess, spinnClass } = this.state;
    const label = 'Click me';
    const showLabel = spinnClass === '';
    const buttonClass = showSuccess ? 'success' : '';
    return (
      <button
        className={`button action-button animate-action-button ${buttonClass}`}
        onClick={this.onClick}
      >
        <div className="animate-object-wrapper flex">
          { !showLabel &&
            <div
              className={`animate-object animate-circle ${spinnClass}`}
              ref={(node) => { this.circle = node; }}
            />
          }
          { showLabel &&
            <p className="action-button-label">{label}</p>
          }
        </div>
      </button>
    );
  }
}

export default Button;
