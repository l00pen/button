import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const SUCCESS_ANIMATION_LENGTH = 2000;

class ButtonCSS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      showSuccess: props.success,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.success) {
      this.setState({
        showSuccess: true,
      });

      setTimeout(() => {
        this.setState({
          showSuccess: false,
        });
      }, SUCCESS_ANIMATION_LENGTH);
    }
  }

  render() {
    const { label, loading } = this.props;
    const { showSuccess } = this.state;
    const buttonClass = showSuccess ? 'success' : '';
    return (
      <button
        className={`button action-button ${buttonClass}`}
        onClick={this.props.onClick}
      >
        <div className="object-wrapper flex">
          { loading &&
            <div className={'object circle'} />
          }
          { showSuccess &&
            <div className={'object checkMark'} />
          }
          { !loading &&
            <p className="action-button-label">{label}</p>
          }
        </div>
      </button>
    );
  }
}

ButtonCSS.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ButtonCSS;
