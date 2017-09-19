import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withDelayedSuccess } from './withDelayedSuccess';

import * as styles from './AsyncJS.css';

const ANIMATION_NONE = '';
const ANIMATION_START = 'animation-start';
const ANIMATION_END = 'animation-end';

const SUCCESS_ANIMATION_LENGTH = 2000;

class AsyncJS extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    loading: PropTypes.bool,
    success: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      animationClass: ANIMATION_NONE,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading) {
      this.setState({
        animationClass: ANIMATION_START,
      });
    }
  }

  componentDidUpdate() {
    if (this.loadingNode) {
      this.loadingNode.addEventListener('animationiteration', () => {
        if (this.props.success) {
          this.setState({
            animationClass: ANIMATION_END,
          }, () => {
            setTimeout(() => {
              this.setState({
                animationClass: ANIMATION_NONE,
              });
            }, SUCCESS_ANIMATION_LENGTH);
          });
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.loadingNode) {
      this.loadingNode.removeEventListener('animationiteration');
    }
  }

  render() {
    const { animationClass } = this.state;
    const { label } = this.props;
    const showLabel = animationClass === ANIMATION_NONE;
    return (
      <div className={cx(styles.animateObjectWrapper)}>
        { !showLabel &&
          <div
            className={cx(styles.animateObject, styles.animateCircle, styles[animationClass])}
            ref={(node) => { this.loadingNode = node; }}
          />
        }
        { showLabel &&
          <span className={cx(styles.actionButtonLabel)}>{label}</span>
        }
      </div>
    );
  }
}

export default withDelayedSuccess(AsyncJS);
