import React from 'react';
import { boxOptions } from './const';
import './App.css';
import Box from './Box';
import ItemList from './itemList';

function App() {
  const boxes = boxOptions.map((box, idx) => (
    <Box
      {...box}
      key={box.color}
      idx={idx}
    />
  ));
  return (
    <div className="App">
      <div className="task task-1">
        <h1>First task</h1>
        {boxes}
      </div>
      <div className="task task-2">
        <h1>Second task</h1>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
