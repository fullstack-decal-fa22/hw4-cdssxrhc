import React, { useState } from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';
import Block from './Block';

const Menu = (props) => {

  // cannot render elements here because the rendering happens from feed
  // that's why handleclick = {props.addBlock} and addBlock is implemented in the feed instead of here

  return (
    <div className="colorOptions">
      <Color color="red" handleclick={props.addBlock}></Color>
      <Color color="pink" handleclick={props.addBlock}></Color>
      <Color color="blue" handleclick={props.addBlock}></Color>
      <Color color="green" handleclick={props.addBlock}></Color>
    </div>
  );
}

export default Menu;