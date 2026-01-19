import React from 'react';
import Icon from './icon';

const IconButton = ({ name, onClick }) => {
  return (
    <button
      className='btn-submit btn-lookingglass'
      data-testid='btn-submit'
      onClick={(event) => {
        onClick(event);
      }}
      aria-label={name}>
      <span className='icon-lookingglass-white'></span>
      <Icon name={name} />
    </button>
  );
};

export default IconButton;
