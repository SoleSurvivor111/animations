import React from 'react';
import { Animated } from 'react-animated-css';
import { boxOptions } from './const';
import './App.css';
import Box from './Box';
import ListItem from './ListItem';

function App() {
  const boxes = boxOptions.map(box => {
    return (
    <Box
      {...box}
      key={box.color}
      Animated={Animated}
    />
  )
  });
  return (
    <div className="App">
      <div className="task">
        <h1>First task</h1>
        {boxes}
      </div>
      <div className="task task-2">
        <h1>Second task</h1>
        <ListItem />
      </div>
    </div>
  );
}

export default App;
