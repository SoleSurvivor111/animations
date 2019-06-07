import React from 'react';
import {
  max,
} from './const'
import delay from 'lodash/delay';

export default class Item extends React.Component {
  state = {
    itemWidth: Math.round((this.props.i.steps / max * 100 - 15) / 2),
    opacity: '0',
    initialsAnim: '',
    stepsAnim: '',
    applicationAnim: '',
  }


  handleChooseColor = (num) => {
    const steps = Math.round(+num);
    if (steps <= 8) {
      return 'orange';
    } else if (steps > 8 && steps < 13) {
      return 'green';
    } else {
      return 'blue';
    }
  }

  handleChangeListItem = () => {
    const { itemWidth } = this.state;

    this.setState({
      itemWidth: itemWidth * 2,
      opacity: '1',
    })
  }

  handleActivateAnimation = (name) => {
    this.setState({
      [name]:'fadeInLeft'
    })
  }

  componentDidMount() {
    const { idx } = this.props;
    delay(this.handleChangeListItem, 200 * idx)
    delay(this.handleActivateAnimation, 205 * idx, 'initialsAnim');
    delay(this.handleActivateAnimation, 205 * idx + 20, 'stepsAnim');
    delay(this.handleActivateAnimation, 205 * idx + 80, 'applicationAnim');
  }

  render() {
    const {
      itemWidth,
      opacity,
      initialsAnim,
      stepsAnim,
      applicationAnim,
    } = this.state;
    const {
      i,
    } = this.props;
    return(
      <li
        className="list-item"
        style={{opacity: opacity}}
      >
        <div className="initials-box"
          style={{
            background: this.handleChooseColor(i.steps),
            flex: `0 1 ${itemWidth}%`,
          }}
        >
          <span
            className={`initials ${initialsAnim}`}
          >
            {i.fullName}
          </span>
        </div>
        <div className="info">
          <span
            className={`steps ${stepsAnim}`}
          >
            {`${i.steps} steps`}
          </span>
          <span
            className={`application ${applicationAnim}`}
          >
            {i.application}
          </span>
        </div>
      </li>
    );
  }
}
