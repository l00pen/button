import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.css';

class Button extends React.Component {
  static defaultProps = {
    className: '',
    children: null,
  }

  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  mouseEnterHandler = () => {
    this.setState({
      hover: true,
    });
  }

  mouseLeaveHandler = () => {
    this.setState({
      hover: false,
    });
  }

  render() {
    const { children, onClick, className } = this.props;
    return (
      <button
        className={cx('button', className, { hover: this.state.hover })}
        onClick={onClick}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        {children}
      </button>
    );
  }
}

export default Button;
