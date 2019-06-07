import React from 'react';


export default class Box extends React.Component {
  state = {
    isVisible: false,
  }

  handleActivateAnimation = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    })
  }

  render() {
    const { isVisible } = this.state;
    const {
      Animated,
      animation,
      color,
    } = this.props;
    return(
      <React.Fragment>
        <label
          onClick={this.handleActivateAnimation}
        >
          {`${animation} ---click me`}
        </label>
        <Animated
          animationIn={animation}
          animationOut="zoomOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={isVisible}>
          <div
            className="box"
            style={{background: color}}
          />
        </Animated>
      </React.Fragment>
    );
  }
}
