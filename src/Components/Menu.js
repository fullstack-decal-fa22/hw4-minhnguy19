import React, { useState } from 'react';
import Color from './Color';
import Block from './Block';

const Menu = ({update}) => { 
    return (
      <div className="colorOptions">
          <Color color="red" handleClick ={update}>
          </Color>
          <Color color="pink" handleClick ={update}>
          </Color>
          <Color color="blue" handleClick ={update}>
          </Color>
          <Color color="green" handleClick ={update}>
          </Color>
      </div>
    );
}

export default Menu;