import React from 'react';
import {
  peopleList,
} from './const';
import  Item from './item';

export default class ItemList extends React.Component {

  render() {
    return(
      <ul className="item-list">
        {
          peopleList.map((i, idx) => {
          return(
            <Item
              key={idx}
              i={i}
              idx={idx}
            />
          );
        })
      }
      </ul>
    );
  }
}
