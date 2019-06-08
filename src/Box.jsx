import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';


export default class Box extends React.Component {
  state = {
    isVisible: false,
  }

  handleActivateAnimation = () => {
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible,
    });
  }

  render() {
    const { isVisible } = this.state;
    const {
      animation,
      color,
      idx,
    } = this.props;
    return (
      <React.Fragment>
        <span
          role="menuitem"
          tabIndex={idx}
          onClick={this.handleActivateAnimation}
        >
          {`${animation} ---click me`}
        </span>
        <Animated
          animationIn={animation}
          animationOut="zoomOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={isVisible}
        >
          <div
            className="box"
            style={{ background: color }}
          />
        </Animated>
      </React.Fragment>
    );
  }
}
Box.propTypes = {
  animation: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};
