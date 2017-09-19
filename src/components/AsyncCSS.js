import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import * as styles from './AsyncCSS.css';

class AsyncCSS extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    loading: PropTypes.bool,
    success: PropTypes.bool,
  }

  render() {
    const { label, loading, success } = this.props;
    const loadingClasses = cx(
      styles.asyncContainer,
      {
        [styles.loading]: loading,
        [styles.success]: success,
      },
    );

    const comp = (loading || success) ?
      <div className={loadingClasses} /> :
      <span className={cx('label', { success })}>{label}</span>;

    return (
      <div className="container">
        {comp}
      </div>
    );
  }
}

export default AsyncCSS;
