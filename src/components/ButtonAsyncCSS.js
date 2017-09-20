import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from './Button';

import * as styles from './ButtonAsyncCSS.css';

class ButtonAsyncCSS extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    loading: PropTypes.bool,
    success: PropTypes.bool,
    onClick: PropTypes.func,
  }

  render() {
    const { label, loading, onClick, success } = this.props;
    const loadingClasses = cx(
      styles.asyncContainer,
      {
        [styles.loadingIcon]: loading,
        [styles.successIcon]: success,
      },
    );

    return (
      <Button
        className={cx({ [styles.success]: success })}
        onClick={onClick}
      >
        <div className={cx(styles.container)}>
          { (loading || success) &&
            <div className={loadingClasses} />
          }
          { !loading &&
            <span className={cx(styles.label, { [styles.success]: success })}>{label}</span>
          }
        </div>
      </Button>
    );
  }
}

export default ButtonAsyncCSS;
