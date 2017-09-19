import React from 'react';
import PropTypes from 'prop-types';

const SUCCESS_ANIMATION_LENGTH = 2000;

export function withDelayedSuccess(Component) {
  return class extends React.Component {
    static propTypes = {
      success: PropTypes.bool,
    }

    constructor(props) {
      super(props);
      this.state = {
        success: props.success,
      };
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.success) {
        this.setState({
          success: true,
        });

        setTimeout(() => {
          this.setState({
            success: false,
          }, this.forceUpdate);
        }, SUCCESS_ANIMATION_LENGTH);
      }
    }
    render() {
      return (
        <Component
          success={this.state.success}
          {...this.props}
        />
      );
    }
  };
}
