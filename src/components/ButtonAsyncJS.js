import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from './Button';
import { withDelayedSuccess } from './withDelayedSuccess';

import * as styles from './ButtonAsyncJS.css';

const ANIMATION_NONE = '';
const ANIMATION_START = 'animation-start';
const ANIMATION_END = 'animation-end';

const SUCCESS_ANIMATION_LENGTH = 2000;

class ButtonAsyncJS extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    loading: PropTypes.bool,
    success: PropTypes.bool,
    onClick: PropTypes.func,
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
    const { label, onClick } = this.props;
    const showLabel = animationClass === ANIMATION_NONE;
    return (
      <Button
        className={cx({ [styles.success]: animationClass === ANIMATION_END })}
        onClick={onClick}
      >
        <div className={cx(styles.asyncContainer)}>
          { !showLabel &&
            <div
              className={cx(styles.asyncWrapper, styles.loading, styles[animationClass])}
              ref={(node) => { this.loadingNode = node; }}
            />
          }
          { showLabel &&
            <span className={cx(styles.label)}>{label}</span>
          }
        </div>
      </Button>
    );
  }
}

export default withDelayedSuccess(ButtonAsyncJS);
