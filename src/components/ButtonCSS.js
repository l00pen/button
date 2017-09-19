import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from './Button';

import './ButtonCSS.css';

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
    const { label, loading, onClick } = this.props;
    const { showSuccess } = this.state;
    return (
      <Button
        className={cx({ success: showSuccess })}
        onClick={onClick}
      >
        <div className="object-wrapper">
          { loading &&
            <div className={'object circle'} />
          }
          { showSuccess &&
            <div className={'object checkMark'} />
          }
          { !loading &&
            <span className={cx('label', { success: showSuccess })}>{label}</span>
          }
        </div>
      </Button>
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
