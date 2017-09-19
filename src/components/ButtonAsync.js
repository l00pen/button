import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from './Button';

import * as styles from './ButtonAsync.css';

class ButtonAsync extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    success: PropTypes.bool,
    onClick: PropTypes.func,
  }

  render() {
    const { children, onClick, success } = this.props;
    return (
      <Button
        className={cx({ [styles.success]: success })}
        onClick={onClick}
      >
        {React.cloneElement(children, { success })}
      </Button>
    );
  }
}

export default ButtonAsync;
