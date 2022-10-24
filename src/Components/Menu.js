import React, { useState } from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';
import Block from './Block';

const Menu = () => {

  // Keep track of colors added
  const [color, setBlockColor] = useState([""]);

  // onClick > handleClick > addBlock > renderBlock
  function addBlock(color) {
    setBlockColor([...color, [""]])
    renderBlock(color);
  };

  function renderBlock(color) {
    return <Block color={color} />
  };

  return (
    <div className="colorOptions">
      <Color color="red" handleClick={addBlock}></Color>
      <Color color="pink" handleClick={addBlock}></Color>
      <Color color="blue" handleClick={addBlock}></Color>
      <Color color="green" handleClick={addBlock}></Color>
    </div>
  );
}

export default Menu;