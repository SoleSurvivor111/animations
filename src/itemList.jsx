import React from 'react';
import {
  peopleList,
} from './const';
import Item from './item';

const ItemList = () => (
  <ul className="item-list">
    {
      peopleList.map((i, idx) => (
        <Item
          key={i.steps}
          i={i}
          idx={idx}
        />
      ))
    }
  </ul>
);
export default ItemList;
