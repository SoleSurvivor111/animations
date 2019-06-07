import React from 'react';
import { peopleList } from './const';

export default class ListItem extends React.Component {
  render() {
    return(
      <ul className="people-list">
        {
          peopleList.map(i => {
          return(
            <li
              key={i.initials}
              className="list-item"
            >
              <div className="initials">{i.initials}</div>
              <div className="">
                <span className="steps">{i.steps}</span>
                <span className="application">{i.application}</span>
              </div>
            </li>
          );
        })
      }
      </ul>
    );
  }
}
